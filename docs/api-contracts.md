# API contracts (initial)

Note: Start with client-side mocks; swap to real endpoints or Firebase later.

## Auth
- POST /api/auth/login { email, password } → { token, user: UserProfile }
- POST /api/auth/signup { email, password, name } → { token, user }
- POST /api/auth/logout → 204

## Templates
- GET /api/templates → TemplateMeta[]
- GET /api/templates/:id → { meta: TemplateMeta, css: string, schema: object }

## Resume
- GET /api/resumes → ResumeDraft[]
- POST /api/resumes { draft } → ResumeDraft
- PATCH /api/resumes/:id { draft } → ResumeDraft
- POST /api/resumes/:id/export { format: 'pdf'|'docx' } → { url }

## AI
- POST /api/ai/generate { prompt, context } → { text }
- POST /api/ai/tailor { resumeDraft, jobDescription } → { suggestions, score }

## ATS
- POST /api/ats/check { resumeDraft, jobDescription? } → { score, keywordsCovered, warnings }

## Jobs
- GET /api/jobs/search?q=... → JobItem[]
- GET /api/jobs/:id → JobItem
- GET /api/jobs/tracker → TrackerRow[]
- POST /api/jobs/tracker { row } → TrackerRow
- PATCH /api/jobs/tracker/:id { row } → TrackerRow

## Payments
- POST /api/payments/checkout { plan } → { checkoutUrl }
- POST /api/payments/webhook → 204
