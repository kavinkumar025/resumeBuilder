# Product vision and success (AI Resume Builder)

## Vision
Help job seekers craft ATS-ready, tailored resumes and cover letters in minutes through an AI-first, guided experience—boosting interview rates with confidence.

## Target personas
- New grads and career switchers: need guidance, templates, and inspiration.
- Working professionals (1–8 yrs): need speed, tailoring, and ATS confidence.
- Power users (job hunters): need multiple versions, tracking, and analytics.

## Value propositions
- AI copilot that improves content where it lives (inline actions, no context switching).
- Real-time ATS linting and keyword coverage from the target job description.
- Beautiful, modern templates that stay ATS-safe and export cleanly.
- End-to-end flow: import, build, tailor, export, apply, and track.

## North-star metric
- Resume-to-interview conversion proxy: percentage of tailored resumes with ATS score ≥80 and at least one application tracked within 7 days.

## KPIs (12 weeks)
- Time-to-first-export median < 10 minutes.
- 60% of newly built resumes use at least one AI suggestion.
- 50% of users complete ATS check before export.
- NPS > 45 for builder experience.

## Constraints and approach
- Start front-end first with SSR-friendly Angular. Back end can be Firebase or a minimal Node + DB for templates, jobs, and payments.
- Privacy by default; no public sharing without explicit action. Clear opt-ins for analytics and share links.
