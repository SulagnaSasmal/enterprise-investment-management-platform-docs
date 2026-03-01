# Enterprise Investment Management Platform — Architecture & Release Documentation (Sample)

This repository is a **portfolio artifact** demonstrating architecture-level documentation for an enterprise investment management platform.

It focuses on:
- Enterprise system decomposition and request/event flows
- High availability / 24x7 application server operations
- Batch processing orchestration (dependencies, idempotency, partitioning)
- Multi-time zone + market calendar alignment
- Failover + per-event transactional processing and audit design
- Release impact governance (ops readiness, risk, compatibility)

## Audience
- Architects / platform engineers
- Release managers / change governance
- Operations / SRE

## What This Is / Isn’t
- **Is**: conceptual system + architecture + release documentation.
- **Isn’t**: end-user help, UI screenshots, or product training.

## Safety / Abstraction Policy
To keep this portfolio safe and credible, the content is intentionally abstracted:
- No proprietary code, internal hostnames/IPs, internal file paths, customer identifiers, or real database table names
- Examples are illustrative and **non-proprietary**

## View the Site (GitHub Pages)
If GitHub Pages is enabled for this repo, open:
- `https://<your-username>.github.io/enterprise-investment-management-platform-docs/`

## Local Viewing
No build step required.
- Open `index.html` directly in a browser, or
- Use a simple static server (optional):

```bash
# Python (if installed)
python -m http.server 8080
```

Then visit `http://localhost:8080/`.

## Document Map
- `index.html` — Executive overview / navigation
- `platform-overview.html` — Domain overview
- `system-architecture.html` — Components, flows, and state transitions
- `high-availability-enhancement.html` — 24x7 model + date rollover
- `batch-processing-framework.html` — Job graph + idempotency patterns
- `multi-time-zone-processing.html` — Zone segmentation + calendar logic
- `failover-and-audit-design.html` — Per-event isolation + audit model
- `database-and-configuration-updates.html` — Abstracted schema/config changes
- `release-impact-summary.html` — Operational and governance framing
- `diagrams/index.html` — Mermaid diagram library

## Sources
This portfolio uses **public references only** (links can be added here as needed). No proprietary documents are included.
