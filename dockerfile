FROM node:22-alpine AS frontend

WORKDIR /frontend

COPY pinst-miniapp/package*.json ./
RUN npm install

COPY pinst-miniapp ./
RUN npm run build

FROM golang:1.25-alpine AS build

WORKDIR /src

RUN apk add --no-cache ca-certificates git

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -trimpath -ldflags="-s -w" -o /out/pinst ./cmd

FROM golang:1.25-alpine

RUN apk add --no-cache ca-certificates tzdata \
	&& adduser -D -H -u 10001 appuser

WORKDIR /app

COPY --from=build /out/pinst /app/pinst
COPY internal/database/migrations /app/internal/database/migrations
COPY --from=frontend /external/app /app/external/app
RUN mkdir -p /app/external /app/landing /app/uploads

RUN chown -R appuser:appuser /app

USER appuser

EXPOSE 8080

ENV LISTEN_ADDR=:8080

ENTRYPOINT ["/app/pinst"]
