---
title: "About"
date: 2026-03-08T10:00:00+05:30
draft: false
tags: ["About", "Digital India", "DPI", "Automation"]
categories: ["Meta"]
description: "How the Digital India Archiver newsletter is generated using AI agents"
---

# About Digital India Archiver

## What is this?

**Digital India Archiver** is an automated newsletter tracking India's [Digital Public Infrastructure (DPI)](https://www.meity.gov.in/digital-public-infrastructure) ecosystem. We cover the stack of digital systems powering India's governance, economy, and citizen services.

## The 7 Layers of DPI We Track

| Layer | Focus | Key Systems |
|-------|-------|-------------|
| **L1** | Identity & Authentication | [Aadhaar](https://uidai.gov.in), PAN, eKYC, DigiLocker |
| **L2** | Payments & Financial Rails | [UPI](https://www.npci.org.in/what-we-do/upi/product-overview.html), BBPS, CBDC, Account Aggregators |
| **L3** | Data Exchange & Consent | [API Setu](https://apisetu.gov.in), DigiLocker APIs, DEPA |
| **L4** | Commerce & Logistics | [ONDC](https://ondc.org), GSTN, e-Way Bill, FASTag |
| **L5** | Sectoral Digital Stacks | [ABHA](https://abha.gov.in) (Health), AgriStack (Agriculture), NAD (Education) |
| **L6** | Governance & Service Delivery | [CPGRAMS](https://pgportal.gov.in), UMANG, eOffice, CSCs |
| **L7** | Regulatory & Security | [DPDP Act](https://www.meity.gov.in/data-protection-framework), [CERT-In](https://www.cert-in.org.in), RBI/SEBI guidelines |

## How Content is Generated

This newsletter is produced by **AI agents** running on [Zo Computer](https://zo.computer), an automated computing platform. Here's the workflow:

### The Agents

We run **2 specialized agents** that publish content daily:

| Agent | Schedule | Coverage | Content |
|-------|----------|----------|---------|
| **Daily DPI Brief** | 8:00 AM IST | Last 24 hours | Quick roundup across **all 7 layers** |
| **Themed Deep Dive** | 8:30 AM IST | Last 7 days | Deep analysis of **one layer per day** |

### Content Rotation (Themed Deep Dive)

| Day | Theme |
|-----|-------|
| Monday | L1: Identity & Authentication |
| Tuesday | L2: Payments & Financial Rails |
| Wednesday | L3: Data Exchange & Consent |
| Thursday | L4: Commerce & Logistics |
| Friday | L5: Sectoral Digital Stacks |
| Saturday | L6: Governance & Service Delivery |
| Sunday | L7: Regulatory & Security |

## Data Sources

Our agents scan and synthesize information from:

- **Official Stack Operators**: [UIDAI](https://uidai.gov.in), [NPCI](https://www.npci.org.in), [ONDC](https://ondc.org), [MeitY](https://www.meity.gov.in), [DARPG](https://darpg.gov.in)
- **Government Portals**: [PIB](https://pib.gov.in), [Press Releases](https://www.meity.gov.in/official-website-ministry-electronics-and-information-technology/press-releases), Gazette notifications
- **Regulatory Bodies**: [RBI](https://www.rbi.org.in), [SEBI](https://www.sebi.gov.in), [TRAI](https://www.trai.gov.in), [CERT-In](https://www.cert-in.org.in)
- **Verified News**: Economic Times, Business Standard, Inc42, The Ken, TechCrunch India

## Human Oversight

While content is AI-generated, it is:
- ✅ Sourced from official and verified channels
- ✅ Cross-checked where multiple sources exist
- ✅ Linked to original sources (every URL is clickable)
- ⚠️ Subject to verification for critical decisions

## About the Archiver

**Digital India Archiver** is a project by [CashlessConsumer](https://cashlessconsumer.in), focused on documenting and analyzing India's digital transformation. We believe in:

- **Transparency**: All sources cited with clickable links
- **Comprehensiveness**: Covering the full DPI stack, not just popular layers
- **Accessibility**: Making complex infrastructure understandable

## Technical Stack

- **Platform**: [Zo Computer](https://zo.computer) — AI agent infrastructure
- **Site Generator**: [Hugo](https://gohugo.io) with [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme
- **Hosting**: [GitHub Pages](https://pages.github.com) with custom domain
- **Repository**: [github.com/CCAgentOrg/digital-india-newsletter](https://github.com/CCAgentOrg/digital-india-newsletter)

## 🤖 Agent Source Code

The AI agents that generate this newsletter are **open source** and documented in detail:

| Agent | Schedule | Coverage | Source Code |
|-------|----------|----------|-------------|
| **Daily DPI Brief** | Daily @ 8:00 AM IST | Last 24 hours across all 7 DPI layers | [View Agent Instructions →](/agents/daily-dpi-brief-agent/) |
| **Themed DPI Deep Dive** | Daily @ 8:30 AM IST | Last 7 days, rotating daily themes | [View Agent Instructions →](/agents/themed-dpi-deep-dive-agent/) |

### How to Improve the Agents

These agents' instructions are version-controlled and open for community improvement:

1. **Open an Issue**: [github.com/CCAgentOrg/digital-india-newsletter/issues](https://github.com/CCAgentOrg/digital-india-newsletter/issues)
   - Suggest new oracle sources to check
   - Report coverage gaps or inaccuracies
   - Propose formatting improvements

2. **Submit a PR**: Edit the agent instruction files directly
   - Fork the repo
   - Modify `content/agents/*.md`
   - Submit pull request with rationale

3. **Review Changes**: Agent improvements are publicly visible and auditable

## Get in Touch

- 🐦 Twitter: [@CashlessConsumer](https://twitter.com/CashlessConsumer)
- 💻 GitHub: [CCAgentOrg](https://github.com/CCAgentOrg)
- ✉️ Email: [CashlessConsumer](https://cashlessconsumer.in/contact)

---

*Last updated: March 8, 2026 | Agents active since March 2026*
