---
title: "LoAma: a private LLM chat interface"
date: "2026-10-16"
summary: "A Docker-based web UI for Ollama, with a FastAPI backend and a vanilla JavaScript frontend."
tags: ["docker", "fastapi", "ollama", "llm", "privacy"]
---

LoAma is a browser-based chat interface for running language models locally through Ollama. Prompts and answers stay on your own hardware instead of going to a third-party service.

## How it fits together

- **Ollama** runs the model and exposes an HTTP API (port 11434 by default).
- **FastAPI backend** receives chat requests from the browser and forwards them to Ollama.
- **Vanilla JavaScript frontend** is the chat page, with no framework.
- **Docker** packages it all so it starts with one command.

Streaming matters here. Ollama sends the answer as it is generated, and the backend passes it through to the browser so text appears word by word instead of after a long wait.

## Containerizing it

A simple `docker-compose.yml` starts both services:

```yaml
services:
  ollama:
    image: ollama/ollama
    volumes:
      - ollama:/root/.ollama
  web:
    build: .
    ports:
      - "8000:8000"
    environment:
      OLLAMA_URL: http://ollama:11434
    depends_on:
      - ollama
volumes:
  ollama:
```

The volume keeps downloaded models between restarts. Then pull a model into the Ollama container:

```bash
docker compose exec ollama ollama pull llama3.2
```

## A networking gotcha

Inside a container, `localhost` means the container itself, not your computer. Containers in the same Compose file reach each other by **service name**, which is why the URL above uses `http://ollama:11434`.

## Lessons

Keep model data in a volume, stream responses instead of waiting for them, and treat the Ollama port as private. Do not expose it to the public internet.
