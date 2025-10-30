# Folder structure

This project follows a feature-first, standalone Angular structure with clear separation of concerns.

## Top-level
- `src/`
  - `main.ts`, `main.server.ts`, `server.ts`: App bootstrap & SSR entrypoints
  - `index.html`: App host
  - `styles.scss` and `styles/`: Global theme and SCSS partials
  - `public/`: Static assets (served as-is per angular.json)
  - `app/`: Application source
- `docs/`: Project documentation

## src/app
- `app.*` and `app.routes.*`: Root shell and routing
- `core/`: Singletons and application infrastructure
  - `guards/`: Route guards
  - `services/`: App-wide services (auth, user, theme, etc.)
  - `interceptors/`: HTTP interceptors (add here if needed)
  - `models/`: Shared data models and interfaces
- `shared/`: Reusable, dumb UI building blocks
  - `modals/`: Presentational modal components
  - `pipes/`: Pure pipes
  - `directives/`: Attribute/structural directives
- `features/`: End-user features (pages, smart components, and their local UI)
  - `authentication/`, `dashboard/`, `jobs/`, `resume/`, `admin/`, etc.
  - Each feature contains its standalone components and `*.routes.ts`.

## Conventions
- Standalone components, one component = `.ts` + `.html` + `.scss` in the same folder.
- Use `@core/*`, `@shared/*`, `@features/*`, and `@app/*` path aliases (see tsconfig.json).
- Keep business logic in services under `core/services` or feature-specific services under the feature.
- Keep presentational components in `shared/components` when they’re reused across features.
- Assets live under `public/` per `angular.json` configuration.

## Example
- `src/app/features/jobs/job-search/job-search.component.(ts|html|scss)`
- `src/app/core/services/auth.service.ts`
- `src/app/shared/modals/confirm-delete.modal.(ts|html|scss)`

## Next steps
- When adding a new shared primitive, place it in `shared/components`.
- When adding a new data interface, add it to `core/models` and import via `@core/models`.
- Prefer importing from path aliases instead of long relative paths.
