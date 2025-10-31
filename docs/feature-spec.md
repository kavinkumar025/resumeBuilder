# Feature specification and phased roadmap

## Tiering
- Essential (Free):
  - Resume editor with live preview and ATS-safe templates (limited set)
  - AI suggestions (daily cap), summary and bullet helpers
  - Import LinkedIn/PDF (basic parser)
  - ATS check (basic: keyword coverage, length, banned elements)
  - Export PDF (watermark) and share link (public/unlisted)
- Growth (Pro):
  - Full template library and custom sections
  - Unlimited AI, tone/style controls, quantify/impact prompts
  - Advanced ATS linting (tense, passive voice, readability, jargon)
  - Word export, no watermark, version history
  - Cover letter generator
  - Multiple profiles (role-targeted)
- Premium (Teams/Plus):
  - Collaboration and comments, suggestions mode
  - Portfolio site generator
  - Job board integrations and smart tracker

## MVP scope (8–10 weeks)
- Builder shell with split view (editor + live preview)
- Template gallery (10 ATS-safe templates)
- AI inline actions in editor
- ATS check panel (basic)
- Export PDF and share link
- Resume Library (versions)
- Cover letter generator (basic)

## Key specs
- Editor
  - Block-based: sections (summary, experience, education, skills, projects, certifications)
  - Reorder sections; drag-and-drop items
  - Inline AI actions on bullets and summary
  - Autosave and manual snapshots
- ATS Check panel
  - Keyword coverage vs JD text
  - Warnings: tables/columns, images, icons, excessive length, passive voice (basic)
  - Score 0–100 with actionable fixes
- Export
  - Server-side PDF render for fidelity; Word export client-side template mapping
- AI
  - Prompt templates per section; tone controls
  - Tailor-to-job using pasted JD

## Roadmap next
- Import improvements (parsing accuracy and mapping)
- Collaboration and comments
- Portfolio generator
- Job application auto-fill extension
