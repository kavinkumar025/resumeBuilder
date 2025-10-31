# Information architecture and routing (proposed)

## Top-level routes
- `/` Landing
- `/login`, `/signup`, `/forgot`
- `/pricing`, `/help`
- `/dashboard` (Auth)
- `/profile` (Auth)
  - `/profile/info`, `/profile/education`, `/profile/experience`, `/profile/skills`
- `/resume` (Auth)
  - `/resume/templates` Template Gallery
  - `/resume/editor` Builder (split view)
  - `/resume/preview` Live Preview
  - `/resume/ats-check` ATS Check panel (deep link)
  - `/resume/download` Export
  - `/resume/history` Library
- `/cover-letter` (Auth)
  - `/cover-letter/generate`, `/cover-letter/edit`
- `/jobs` (Auth)
  - `/jobs/search`, `/jobs/results`, `/jobs/:id`, `/jobs/tracker`
- `/settings` (Auth)
- `/admin` (Admin)
  - `/admin/login`, `/admin/users`, `/admin/templates`, `/admin/analytics`

## Navigation
- AppShell contains top nav with primary CTA “Build Resume” and user menu.
- Left rail inside builder hosts: Sections list, ATS Check tab, and Template tab.

## Guards
- AuthGuard for app routes; AdminGuard for admin; SubscriptionGuard for premium actions.

## Lazy loading
- Each feature remains a standalone route config file. Keep existing structure; add `ats-check` in `resume.routes.ts`.
