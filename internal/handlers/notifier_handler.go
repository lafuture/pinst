package handlers

import "sync"

// taskNotifier broadcasts task-completion signals to waiting SSE connections.
type taskNotifier struct {
	mu   sync.Mutex
	subs map[string][]chan struct{}
}

func newTaskNotifier() *taskNotifier {
	return &taskNotifier{subs: make(map[string][]chan struct{})}
}

func (n *taskNotifier) subscribe(taskID string) chan struct{} {
	ch := make(chan struct{}, 1)
	n.mu.Lock()
	n.subs[taskID] = append(n.subs[taskID], ch)
	n.mu.Unlock()
	return ch
}

func (n *taskNotifier) unsubscribe(taskID string, ch chan struct{}) {
	n.mu.Lock()
	defer n.mu.Unlock()
	subs := n.subs[taskID]
	for i, s := range subs {
		if s == ch {
			n.subs[taskID] = append(subs[:i], subs[i+1:]...)
			break
		}
	}
	if len(n.subs[taskID]) == 0 {
		delete(n.subs, taskID)
	}
}

func (n *taskNotifier) notify(taskID string) {
	n.mu.Lock()
	subs := make([]chan struct{}, len(n.subs[taskID]))
	copy(subs, n.subs[taskID])
	n.mu.Unlock()
	for _, ch := range subs {
		select {
		case ch <- struct{}{}:
		default:
		}
	}
}
