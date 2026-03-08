---
title: "Agent: 101 Explainer Agent (On-Demand)"
date: 2026-03-08T12:00:00+05:30
draft: false
tags: ["Agents", "AI", "101 Series", "On-Demand"]
categories: ["Meta"]
description: "On-demand agent to generate comprehensive 101 explainer guides"
---

# 🤖 Agent: 101 Explainer Agent (On-Demand)

## Overview

| Property | Value |
|----------|-------|
| **Name** | 101 Explainer Agent |
| **Type** | On-Demand |
| **Trigger** | Manual / Issue-based |
| **Model** | minimax-m2.5 |
| **Output** | 1500-2000 word encyclopedic guide |

## Mission

Generate comprehensive 101-level explainer articles for DPI topics on demand. Each explainer follows a consistent structure with What is, How it Works, Types, Statistics, Privacy, Citizen Rights, and References sections.

## Trigger

This agent runs when:
1. A new issue is opened requesting a specific topic
2. Manual trigger via chat command
3. Weekly batch for pending topics

## Topics (Cyclical)

Topics are generated on rotation covering:
- Identity: Aadhaar, UIDAI, e-KYC, DigiYatra
- Payments: UPI, NPCI, RuPay, Bharat BillPay
- Documents: DigiLocker, eSign, API Setu, DEPA
- Commerce: ONDC, GeM, Open Network
- Health: ABHA, ABDM, Health ID
- Agriculture: AgriStack, PM-KISAN, Soil Health
- Governance: e-Office, DigiGram, Jan Sewa
- Security: CERT-In, DPDP, IT Act

## Output Format

See existing 101 explainers for format structure.

## Publishing

```bash
TOPIC="[Topic Name]"
cat > content/explainers/101-${TOPIC}.md << 'EOF'
[generated content]
EOF
git add content/explainers/101-${TOPIC}.md
git commit -m "Add 101: ${TOPIC}"
git push
```

## Quality Checklist

- [ ] Minimum 1500 words
- [ ] All sections populated
- [ ] At least 3 authoritative references
- [ ] Citizen rights section included
- [ ] Internal links to related 101s
- [ ] Checked for broken links
