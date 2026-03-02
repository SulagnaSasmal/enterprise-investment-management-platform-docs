# SunGard Asset Arena Manager — Platform Documentation

Enterprise HTML documentation for the SunGard Asset Arena Manager (FIS Asset Arena) investment management platform — covering system architecture, batch processing (NAV calculation), high availability, multi-time zone fund processing, failover design, and release governance.

## Overview

Asset Arena Manager is an enterprise investment management platform by SunGard (now FIS) used by asset managers, hedge funds, insurance companies, pension funds, and fund administrators globally. This documentation covers platform architecture, operational procedures, and release impact governance.

Static HTML site hosted via GitHub Pages. No build tools or backend required.

## Pages

| Page | Topic |
|------|-------|
| `index.html` | Platform documentation overview |
| `platform-overview.html` | Asset Arena modules — AAIM, Settlement Manager, Fund Administrator |
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

---

*SunGard Asset Arena Manager (FIS) — Internal Use Only*
