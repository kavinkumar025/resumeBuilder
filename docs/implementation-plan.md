# Implementation plan (phased)

## Phase 1 — Foundations (Week 1–2)
- Integrate SplitPane and SidePanel shared components (scaffold)
- Add ATS Check route and placeholder (done)
- Wire ResumeStateService to editor/preview consistently
- Template gallery refinement (10 ATS-safe templates)

## Phase 2 — AI inline + ATS basics (Week 3–5)
- Inline AI actions in editor (improve, quantify, tailor)
- Basic ATS service (client-side) and right-rail panel with live score
- Resume Library (history) and version snapshots

## Phase 3 — Export fidelity + Cover letter (Week 6–7)
- Server-side PDF export for template fidelity
- Word (docx) export mapping
- Cover letter generator integrated from current draft

## Phase 4 — Growth features (Week 8–10)
- Advanced ATS checks, tone/style controls
- Multiple profiles, share links with privacy controls
- Jobs tracker polishing and basic search integration

## Tracking and quality gates
- Telemetry for key KPIs (opt-in)
- E2E happy-path test: create → tailor → ATS ≥80 → export
- Accessibility audit (color contrast, keyboard flows)

## Risks
- PDF export fidelity may require server render pipeline (Puppeteer/Playwright)
- AI cost management and latency; add caching and rate limits
