# Design system overview

This app uses a lightweight design system built with SCSS + CSS variables and Angular Material.

- Tokens live in `src/styles/_variables.scss` and are exposed as CSS variables for both light and dark themes.
- Global typography, utilities, buttons, cards, and forms in `src/styles/*`.
- Angular Material is themed via `src/styles.scss` with light and dark variants. Dark mode is toggled by setting `data-theme="dark"` on `<html>`.
- ThemeService (`src/app/core/services/theme.service.ts`) persists the theme and toggles the `data-theme` attribute.

## Reusable components

- `PageHeaderComponent` (`src/app/shared/components/page-header`): standardized page title area with optional subtitle and actions.
- `AppFooterComponent` (`src/app/shared/components/app-footer`): site-wide footer with links.

## Usage tips

- Wrap page content in a `.container` to get responsive centered width.
- Use utility classes: `.flex`, `.grid`, `.gap-16`, `.rounded`, `.shadow`, `.border`, `.page-center`.
- Prefer Material components for interactive controls; the SCSS button/card/form primitives help for non-Material markup.

## Theming

- Light tokens are declared on `:root`; dark tokens override under `:root[data-theme='dark']`.
- To force dark mode in any sub-tree, set `data-theme="dark"` on an ancestor element.

