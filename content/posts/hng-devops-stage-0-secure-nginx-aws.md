---
title: "Secure Nginx on AWS"
date: "2026-10-16"
summary: "Launching an EC2 instance, serving a site with Nginx, and securing it with a Let's Encrypt certificate."
tags: ["aws", "nginx", "devops", "ssl", "hng"]
---

Stage 0 of the HNG DevOps track was about putting a real server on the internet and securing it. I deployed Nginx on an AWS EC2 instance and set up HTTPS with a Let's Encrypt certificate.

## The pieces

- **EC2 instance:** a Linux virtual machine in AWS.
- **Security group:** the firewall in front of it. Open port 22 (SSH), 80 (HTTP) and 443 (HTTPS). Restrict SSH to your own IP address instead of the whole internet.
- **Nginx:** the web server.
- **Let's Encrypt:** a free certificate authority. It needs a **domain name**, because it does not issue certificates for bare IP addresses.

## Steps

1. Launch an Ubuntu instance and attach an Elastic IP so the address does not change on reboot.
2. Point your domain's A record at that IP.
3. Install Nginx:

```bash
sudo apt update
sudo apt install nginx
```

4. Install Certbot and request a certificate:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d example.com
```

Certbot edits the Nginx config and sets up the redirect from HTTP to HTTPS.

5. Test automatic renewal, since certificates last 90 days:

```bash
sudo certbot renew --dry-run
```

## Hardening

- Disable SSH password login and use key pairs only.
- Add `server_tokens off;` in the Nginx config to hide the version number.
- Keep the system updated.

## Lessons

Let's Encrypt validates by reaching your server on port 80, so a closed port 80 makes certificate requests fail. DNS must also be pointing at the instance before you run Certbot.
