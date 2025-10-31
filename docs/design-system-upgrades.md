# Design system upgrades (proposed)

## Tokens
- Color: neutral (N50–N900), primary, success, warning, danger; with on-variants for contrast.
- Spacing: 4px base scale (4, 8, 12, 16, 20, 24, 32, 40, 48, 64).
- Typography: fluid sizes using clamp() for headings; Inter/Roboto for UI, Literata for headings (optional).
- Radius: 8, 12; Shadows: xs–xl.

Expose tokens as CSS variables in `:root` and `:root[data-theme='dark']`. Keep Angular Material theme in sync.

## Components (shared)
- SplitPane: resizable editor/preview layout with sensible min/max.
- SidePanel: tabs (Sections, Templates, ATS) with sticky footer.
- InlineActionsMenu: small popover for AI actions (Improve, Quantify, Tailor, Shorten, Expand).
- ScoreBadge: color-coded ATS score with tooltip of top warnings.
- KeywordChips: interactive chips with add/remove from JD extraction.

## Accessibility
- Enforce 4.5:1 contrast; keyboard-focus visible; ARIA landmarks; section reordering with keyboard.
- Live region announcements for AI operations and ATS score updates.

## Motion
- Subtle transitions for section expand/collapse; reduce motion preference respected.
