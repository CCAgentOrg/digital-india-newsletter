# 🤖 AI Agents — DPI Watch

This document provides an overview. For **portable agent configurations**, see `agents.json` which can be imported into any AI harness.

## Active Agents (5)

| Agent | Schedule | Focus |
|-------|----------|-------|
| Daily DPI Brief | Daily 8:00 AM | All 7 DPI layers |
| Themed Deep Dive | Daily 8:30 AM | Rotating DPI layer |
| Weekly Deep Research | Sundays 9:00 AM | 2000+ word analysis |
| Weekly Satire | Saturdays 10:00 AM | Citizen rights satire |
| 101 Explainer | Thursdays 9:00 AM | Encyclopedic guides |

## Portable Format

All agent configurations are stored in **`agents.json`** - a machine-readable format that can be imported by any AI orchestration harness.

```bash
# Import into your system
jq '.agents' agents.json
```

## Contributing

To improve agents:
1. Edit `agents.json` for portable configuration
2. Or edit individual files in `content/agents/`
3. Submit PR to https://github.com/CCAgentOrg/dpiwatch
