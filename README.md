# SunBridge Asset Atrium Manager — Platform Documentation

Enterprise HTML documentation for the SunBridge Asset Atrium Manager (FGS Asset Atrium) investment management platform. Topics include system architecture, batch processing (NAV calculation), high availability, multi-time zone fund processing, failover design, and release governance.

## Overview

Asset Atrium Manager is an enterprise investment management platform by SunBridge (now FGS). It serves asset managers, hedge funds, insurance companies, pension funds, and fund administrators globally. This documentation covers platform architecture, operational procedures, and release impact governance.

Static HTML site hosted via GitHub Pages. No build tools or backend required.

## Pages

| Page | Topic |
|------|-------|
| `index.html` | Platform documentation overview |
| `platform-overview.html` | Asset Atrium modules — ATIM, Settlement Manager, Fund Administrator |
| `system-architecture.html` | J2EE architecture — WebLogic, Oracle RAC, MQ, SWIFT, Bloomberg |
| `high-availability-enhancement.html` | HA design — clustering, Oracle RAC, DR, rolling restarts |
| `batch-processing-framework.html` | NAV calculation batch orchestration and scheduling |
| `multi-time-zone-processing.html` | Global fund processing zones, calendars, NAV cut-offs |
| `failover-and-audit-design.html` | JMS failover, JTA transactions, Oracle audit trail |
| `database-and-configuration-updates.html` | Oracle schema management, Liquibase, reference data |
| `release-impact-summary.html` | Release governance — CAB, ops readiness, risk assessment |
| `diagrams/index.html` | Mermaid diagram library |

## Technology

- HTML (~94%)
- CSS (~4%)
- JavaScript (~2% — navigation and Mermaid diagrams)
- No frameworks, no build pipeline

## Usage

Open `index.html` in any browser, or deploy to GitHub Pages for hosted access.

## Dark / Light Mode

All pages support dark and light themes via a toggle button in the navigation bar. The selected theme persists in `localStorage`. System preference (`prefers-color-scheme`) is respected on first visit.

## Status

**Phase: Operations & Maintenance — Complete**

| Area | Status |
|------|--------|
| Platform architecture docs | Complete |
| Batch processing framework | Complete |
| High availability & failover design | Complete |
| Multi-time zone processing | Complete |
| Database & configuration management | Complete |
| Release governance framework | Complete |
| Dark / light theme support | Complete |

## Future Enhancements

- Fund Administrator module deep-dive (accounting, NAV publishing, distribution)
- Settlement Manager end-to-end trade lifecycle walkthrough
- Bloomberg BVAL / Refinitiv integration configuration guide
- SWIFT Alliance Lite2 connectivity procedures

---

*SunBridge Asset Atrium Manager (FGS) — Portfolio demonstration project. Not affiliated with any organisation.*
