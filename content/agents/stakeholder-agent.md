---
title: "Agent: Stakeholder Agent (On-Demand)"
date: 2026-03-08T12:00:00+05:30
draft: false
tags: ["Agents", "AI", "Stakeholders", "On-Demand"]
categories: ["Meta"]
description: "On-demand agent to generate stakeholder directories and relationship maps"
---

# 🤖 Agent: Stakeholder Agent (On-Demand)

## Overview

| Property | Value |
|----------|-------|
| **Name** | Stakeholder Agent |
| **Type** | On-Demand |
| **Trigger** | Manual / Issue-based |
| **Model** | minimax-m2.5 |
| **Output** | Comprehensive stakeholder directory |

## Mission

Generate and maintain stakeholder directories mapping key players, their relationships, and hierarchies in India's DPI ecosystem.

## Trigger

This agent runs when:
1. A new issue requests a stakeholder map
2. Major DPI update requires stakeholder refresh
3. Quarterly refresh of existing stakeholder pages

## Stakeholder Categories

- Identity: UIDAI, MeitY, State UID cells
- Payments: NPCI, RBI, Treasury
- Health: NHA, State Health departments
- Agriculture: AgriStack, ICAR, State Agriculture
- Governance: DARPG, MeitY, State DIT
- Security: CERT-In, NCIIPC, DPDP Board

## Output Format

See existing stakeholders.md for format structure.

## Publishing

```bash
cat > content/stakeholders.md << 'EOF'
[generated content]
EOF
git add content/stakeholders.md
git commit -m "Update DPI stakeholders"
git push
```

## Quality Checklist

- [ ] All key stakeholders included
- [ ] Official links verified
- [ ] Hierarchical relationships clear
- [ ] Recent updates reflected
- [ ] Citizen contact points listed
