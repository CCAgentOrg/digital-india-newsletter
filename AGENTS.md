# 🤖 AI Agents — DPI Watch

This document lists all AI agents powering the DPI Watch blog.

## 🤖 Scheduled Agents (Auto-run on schedule)

These agents run automatically on a schedule to generate content.

| Agent | Schedule | Type | Status |
|-------|----------|------|--------|
| Daily DPI Brief | Daily 8:00 AM | Brief | ✅ Active |
| Themed DPI Deep Dive | Daily 8:30 AM | Deep Dive | ✅ Active |
| Weekly DPI Deep Research | Sundays 9:00 AM | Analysis | ✅ Active |
| Weekly DPI Satire | Saturdays 10:00 AM | Satire | ✅ Active |

## 🎯 On-Demand Agents (Run when triggered)

These agents generate content when explicitly requested.

| Agent | Trigger | Type | Status |
|-------|---------|------|--------|
| 101 Explainer Agent | On-demand request | Explainer | ✅ Active |
| Stakeholder Agent | On-demand request | Directory | ✅ Active |

## Agent Details

### Scheduled Agents

#### 1. Daily DPI Brief
- **ID**: `2978ac7e-10d1-4421-abdd-7c2b088ff642`
- **Schedule**: Daily @ 8:00 AM IST
- **Coverage**: All 7 DPI layers, last 24 hours

#### 2. Themed DPI Deep Dive
- **ID**: `58327745-bacb-48a2-b0af-1287342c2350`
- **Schedule**: Daily @ 8:30 AM IST
- **Coverage**: Single DPI layer, last 7 days

#### 3. Weekly DPI Deep Research
- **ID**: `8fbdc802-ab3c-4e9c-ab91-2a8f30d16b8ff`
- **Schedule**: Sundays @ 9:00 AM IST
- **Coverage**: Week's DPI developments + historical context

#### 4. Weekly DPI Satire
- **ID**: `7c9e1b3d-5f8a-42e1-b9a3-6d8e4f7c2b1a`
- **Schedule**: Saturdays @ 10:00 AM IST

### On-Demand Agents

#### 5. 101 Explainer Agent
- **ID**: `9a4f2c1e-7d3b-42f5-a8e1-5c6d8e3f2b1a`
- **Trigger**: Manual request
- **Output**: Encyclopedic DPI guides with Citizen Rights Analysis

#### 6. Stakeholder Agent
- **ID**: `2e8f3a7c-9d4b-42f5-a8e1-8c7d6e5f3a2b`
- **Trigger**: Manual request
- **Output**: Key stakeholder directories for DPI ecosystem

## Portable Agent Configuration

All agent configurations are stored in `agents.json` for machine-readable import:

```bash
# View all agents
cat agents.json | jq '.agents'

# Export to other systems
cat agents.json
```

## Contributing

To improve any agent:
1. Edit source files in `content/agents/`
2. Submit PR with rationale
3. Open issue to discuss changes

## Version Control

All agent instructions are stored in Git and synced to live agents.
