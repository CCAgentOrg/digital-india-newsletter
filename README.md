# 📜 Digital India Archiver

A Hugo-powered weekly newsletter tracking digital governance in India. Deployed to GitHub Pages.

## 🌐 Live Site

**URL**: `https://archiver.cashlessconsumer.in`

## 📋 Content Focus

- **Aadhaar & Digital Identity** — UIDAI updates, privacy concerns, authentication
- **Digital Public Infrastructure** — UPI, digilocker, health stack
- **Policy & Regulation** — Data protection, AI governance, IT rules
- **Government Tech** — Digital India initiatives, e-governance
- **Budget & Economy** — Tech sector incentives, data center policy

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/CashlessConsumer/digital-india-archiver.git
cd digital-india-archiver

# Add new post
hugo new content posts/YYYY-MM-DD-weekly-digest.md

# Local preview
hugo server -D

# Build
hugo --gc --minify
```

## 📝 Publishing Workflow

This is a **weekly newsletter** published every **Monday**.

### For Agents

Use the helper script:

```bash
cd /home/workspace/Blog/digital-india-archiver
bun run scripts/new-post.ts --title "Week of March 10-15, 2026" --content "..."
```

Or create manually:

```bash
hugo new content posts/2026-03-10-weekly-digest.md
```

Frontmatter template:
```yaml
---
title: "Weekly Digital Governance — March 10-15, 2026"
date: 2026-03-10T09:00:00+05:30
draft: false
tags: ["Aadhaar", "Digital Identity", "Policy"]
categories: ["Weekly Digest"]
description: "Brief excerpt..."
---
```

## 🏷️ Tags

Common tags for this newsletter:
- `Aadhaar` — UIDAI updates, Aadhaar-related news
- `Digital Identity` — Digital ID systems, privacy
- `DPI` — Digital Public Infrastructure
- `Data Protection` — DPDP Act, privacy policy
- `AI Regulation` — Deepfakes, AI governance
- `Budget` — Union Budget tech provisions
- `Government Tech` — e-governance initiatives

## 📄 License

Content: CC BY-SA 4.0
Code: MIT
