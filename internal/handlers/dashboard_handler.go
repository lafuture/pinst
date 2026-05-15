package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"time"

	"pinst/internal/database"
)

func (h *Handler) DashboardHandler(w http.ResponseWriter, r *http.Request) {
	m, err := h.db.GetDashboardMetrics(r.Context())
	if err != nil {
		log.Printf("Dashboard: GetDashboardMetrics err=%v", err)
		http.Error(w, "database error", http.StatusInternalServerError)
		return
	}

	nrrColor := "#4ade80"
	if m.NRR < 100 {
		nrrColor = "#f87171"
	}
	churnColor := "#4ade80"
	if m.ChurnRate > 3 {
		churnColor = "#f87171"
	}

	apiCostMonth := m.PhotoCostMonth + m.ChatCostTotal
	profit := m.MRR - apiCostMonth
	profitColor := "#4ade80"
	if profit < 0 {
		profitColor = "#f87171"
	}

	now := time.Now().UTC().Format("02 Jan 2006 15:04 UTC")

	html := fmt.Sprintf(`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Pinst Dashboard</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#0d1117;color:#c9d1d9;min-height:100vh;padding:24px 20px}
header{display:flex;align-items:baseline;gap:12px;margin-bottom:32px}
h1{font-size:1.4rem;font-weight:700;color:#f0f6fc}
.ts{font-size:.78rem;color:#484f58;margin-left:auto}
section{margin-bottom:32px}
h2{font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:#484f58;margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid #21262d}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px}
.card{background:#161b22;border:1px solid #21262d;border-radius:10px;padding:16px 16px 14px;position:relative;transition:border-color .15s}
.card:hover{border-color:#30363d}
.val{font-size:1.8rem;font-weight:700;color:#f0f6fc;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.val.md{font-size:1.4rem}
.val.sm{font-size:1.1rem}
.sub{font-size:.72rem;color:#8b949e;margin-top:3px}
.lab{font-size:.72rem;color:#8b949e;margin-top:8px}
.badge{display:inline-block;font-size:.65rem;padding:2px 6px;border-radius:4px;margin-left:6px;vertical-align:middle;font-weight:600}
.badge.up{background:#1a4731;color:#3fb950}
.badge.dn{background:#4d1b1b;color:#f85149}
.chart-btn{position:absolute;top:10px;right:10px;background:none;border:none;cursor:pointer;color:#484f58;padding:2px;line-height:1;font-size:14px;transition:color .15s}
.chart-btn:hover{color:#8b949e}
.stub{font-size:.85rem;color:#484f58;font-style:italic}
.red{color:#f87171!important}

/* Modal */
.overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:100;align-items:center;justify-content:center;padding:20px}
.overlay.open{display:flex}
.modal{background:#161b22;border:1px solid #30363d;border-radius:14px;padding:24px;width:100%%;max-width:680px;position:relative}
.modal h3{font-size:1rem;font-weight:600;color:#f0f6fc;margin-bottom:16px}
.period{display:flex;gap:6px;margin-bottom:18px}
.period button{background:#21262d;border:1px solid #30363d;color:#8b949e;padding:5px 14px;border-radius:6px;font-size:.78rem;cursor:pointer;transition:all .15s}
.period button.active,.period button:hover{background:#388bfd22;border-color:#388bfd;color:#58a6ff}
.close-btn{position:absolute;top:14px;right:16px;background:none;border:none;color:#484f58;font-size:20px;cursor:pointer;line-height:1}
.close-btn:hover{color:#8b949e}
canvas{max-height:280px}
@media(max-width:480px){.grid{grid-template-columns:1fr 1fr}.val{font-size:1.4rem}}
</style>
</head>
<body>
<header>
  <h1>Pinst Dashboard</h1>
  <span class="ts">%s · обновляется каждые 60 сек</span>
</header>

<section>
  <h2>Пользователи</h2>
  <div class="grid">
    <div class="card">
      <button class="chart-btn" onclick="openChart('new_users','Новые пользователи')">&#9654;</button>
      <div class="val">%d</div>
      <div class="sub">+%d сегодня</div>
      <div class="lab">Всего пользователей</div>
    </div>
    <div class="card">
      <div class="val">%d</div>
      <div class="sub">+%d сегодня</div>
      <div class="lab">Free</div>
    </div>
    <div class="card">
      <div class="val">%d</div>
      <div class="sub">+%d сегодня</div>
      <div class="lab">Lite (349 ₽/мес)</div>
    </div>
    <div class="card">
      <div class="val">%d</div>
      <div class="sub">+%d сегодня</div>
      <div class="lab">Pro (899 ₽/мес)</div>
    </div>
  </div>
</section>

<section>
  <h2>Выручка</h2>
  <div class="grid">
    <div class="card">
      <button class="chart-btn" onclick="openChart('mrr','MRR')">&#9654;</button>
      <div class="val md">%.0f ₽</div>
      <div class="sub">+%.0f ₽ новый</div>
      <div class="lab">MRR</div>
    </div>
    <div class="card">
      <div class="val md" style="color:%s">%.1f%%</div>
      <div class="sub">%s</div>
      <div class="lab">NRR</div>
    </div>
    <div class="card">
      <div class="val md" style="color:%s">%.2f%%</div>
      <div class="sub">Доходов потеряно: %.2f%%</div>
      <div class="lab">Churn Rate</div>
    </div>
    <div class="card">
      <button class="chart-btn" onclick="openChart('revenue','Выручка по дням')">&#9654;</button>
      <div class="val md">%.0f ₽</div>
      <div class="lab">LTV avg</div>
    </div>
    <div class="card">
      <div class="val md" style="color:%s">%.0f ₽</div>
      <div class="sub">фото API %.0f ₽ + чат %.0f ₽</div>
      <div class="lab">Прибыль (MRR − API)</div>
    </div>
  </div>
</section>

<section>
  <h2>Удержание</h2>
  <div class="grid">
    <div class="card">
      <div class="val md">%.1f%%</div>
      <div class="lab">Retention M1</div>
      <div class="sub">когорта 25–35 дней назад</div>
    </div>
    <div class="card">
      <div class="val md">%.1f%%</div>
      <div class="lab">Retention M3</div>
      <div class="sub">когорта 80–100 дней назад</div>
    </div>
    <div class="card">
      <div class="val md">%.2f%%</div>
      <div class="lab">Free → Paid за месяц</div>
      <div class="sub">новых платящих этот месяц</div>
    </div>
    <div class="card">
      <div class="val md">%.1f%%</div>
      <div class="lab">%% дошли до оплаты</div>
      <div class="sub">хотя бы один платёж</div>
    </div>
  </div>
</section>

<section>
  <h2>Активность</h2>
  <div class="grid">
    <div class="card">
      <button class="chart-btn" onclick="openChart('dau','DAU по дням')">&#9654;</button>
      <div class="val">%d</div>
      <div class="lab">DAU</div>
      <div class="sub">уникальных активных сегодня</div>
    </div>
    <div class="card">
      <div class="val">%d</div>
      <div class="lab">MAU</div>
      <div class="sub">уникальных за 30 дней</div>
    </div>
    <div class="card">
      <div class="val md">%.1f%%</div>
      <div class="lab">DAU / MAU</div>
      <div class="sub">коэффициент вовлечённости</div>
    </div>
    <div class="card">
      <button class="chart-btn" onclick="openChart('gens','Генерации по дням')">&#9654;</button>
      <div class="val md sm">генерации</div>
      <div class="lab">см. график &#9654;</div>
    </div>
  </div>
</section>

<section>
  <h2>Техническое</h2>
  <div class="grid">
    <div class="card">
      <div class="val md" style="color:#4ade80">99.95%%</div>
      <div class="lab">Uptime 30d</div>
      <div class="sub">статичное значение</div>
    </div>
    <div class="card">
      <div class="val stub">нет данных</div>
      <div class="lab">Latency p95</div>
      <div class="sub">нет таблицы с логами</div>
    </div>
  </div>
</section>

<!-- Chart Modal -->
<div class="overlay" id="overlay" onclick="if(event.target===this)closeChart()">
  <div class="modal">
    <button class="close-btn" onclick="closeChart()">&#215;</button>
    <h3 id="modal-title">График</h3>
    <div class="period">
      <button onclick="setPeriod(7)"  id="p7"  class="active">7 дней</button>
      <button onclick="setPeriod(30)" id="p30">30 дней</button>
      <button onclick="setPeriod(90)" id="p90">90 дней</button>
    </div>
    <canvas id="chart-canvas"></canvas>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
var currentMetric = '';
var currentDays = 7;
var chartInstance = null;

function openChart(metric, title) {
  currentMetric = metric;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('overlay').classList.add('open');
  setPeriod(7);
}

function closeChart() {
  document.getElementById('overlay').classList.remove('open');
  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
}

function setPeriod(days) {
  currentDays = days;
  [7,30,90].forEach(function(d) {
    document.getElementById('p'+d).classList.toggle('active', d === days);
  });
  loadChart();
}

function loadChart() {
  fetch('/dashboard/api/chart?metric=' + currentMetric + '&days=' + currentDays)
    .then(function(r){ return r.json(); })
    .then(function(data) {
      var labels = data.map(function(p){ return p.date.slice(5); }); // MM-DD
      var values = data.map(function(p){ return p.value; });
      if (chartInstance) chartInstance.destroy();
      chartInstance = new Chart(document.getElementById('chart-canvas'), {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            data: values,
            borderColor: '#388bfd',
            backgroundColor: 'rgba(56,139,253,.12)',
            borderWidth: 2,
            pointRadius: currentDays <= 14 ? 4 : 2,
            pointBackgroundColor: '#388bfd',
            fill: true,
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: '#21262d' }, ticks: { color: '#8b949e', maxTicksLimit: 10 } },
            y: { grid: { color: '#21262d' }, ticks: { color: '#8b949e' }, beginAtZero: true }
          }
        }
      });
    });
}

document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeChart(); });
setTimeout(function(){ location.reload(); }, 60000);
</script>
</body>
</html>`,
		now,
		// Users
		m.TotalUsers, m.NewUsersToday,
		m.FreeTotal, m.FreeNewToday,
		m.LiteTotal, m.LiteNewToday,
		m.ProTotal, m.ProNewToday,
		// Revenue
		m.MRR, m.NewMRR,
		nrrColor, m.NRR, nrrLabel(m.NRR),
		churnColor, m.ChurnRate, m.RevenueChurn,
		m.LTVAvg,
		profitColor, profit, m.PhotoCostMonth, m.ChatCostTotal,
		// Retention
		m.RetentionM1, m.RetentionM3,
		m.FreeToPaidPct, m.ReachedPayPct,
		// Activity
		m.DAU, m.MAU, m.DAUMAURatio,
	)

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("Cache-Control", "no-store")
	_, _ = fmt.Fprint(w, html)
}

func nrrLabel(nrr float64) string {
	if nrr >= 100 {
		return fmt.Sprintf("экспансия +%.1f%%", nrr-100)
	}
	return fmt.Sprintf("сжатие −%.1f%%", 100-nrr)
}

func (h *Handler) DashboardChartHandler(w http.ResponseWriter, r *http.Request) {
	metric := r.URL.Query().Get("metric")
	daysStr := r.URL.Query().Get("days")
	days, err := strconv.Atoi(daysStr)
	if err != nil || days <= 0 {
		days = 30
	}

	pts, err := h.db.GetChartData(r.Context(), metric, days)
	if err != nil {
		log.Printf("DashboardChart: GetChartData metric=%s days=%d err=%v", metric, days, err)
		http.Error(w, "database error", http.StatusInternalServerError)
		return
	}
	if pts == nil {
		pts = []database.ChartPoint{}
	}

	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Cache-Control", "no-store")
	_ = json.NewEncoder(w).Encode(pts)
}
