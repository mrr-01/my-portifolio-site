---
title: "A Python API with CI/CD"
date: "2026-10-16"
summary: "Building a Python API and deploying it automatically through a CI/CD pipeline on cloud infrastructure."
tags: ["python", "ci-cd", "api", "devops", "hng"]
---

These stages moved from serving a static page to shipping an application. I built a Python-based API and deployed it to cloud infrastructure with a CI/CD pipeline, so a push to the repository updates the running service.

## Why CI/CD

Without a pipeline, every release means logging in to a server and copying files by hand. A pipeline makes releases repeatable and removes the "it worked on my machine" step.

## The general shape

A typical pipeline on GitHub Actions has three stages:

1. **Test:** install dependencies and run the test suite.
2. **Build:** package the app, or build a container image.
3. **Deploy:** copy the new version to the server and restart the service.

Here is the basic structure of such a workflow. Adapt it to the tools you used:

```yaml
name: deploy
on:
  push:
    branches: [main]
jobs:
  test-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
      - run: pip install -r requirements.txt
      - run: pytest
      # deploy step: SSH to the server and restart the service
```

Secrets such as the server address and SSH key go in the repository's **Settings, Secrets and variables**, never in the code.

## Running the API on the server

Keep the app alive with a process manager such as `systemd`, and put Nginx in front of it as a reverse proxy so it is reachable on ports 80 and 443.

## Lessons

Make the pipeline fail loudly. If tests fail, the deploy must not run. Also keep the deploy step idempotent, meaning running it twice gives the same result.
