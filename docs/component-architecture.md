# Component architecture (proposed)

## Principles
- Standalone components; smart (container) vs dumb (presentational) split where useful.
- Feature-first folders; Shared holds reusable primitives.
- State: Angular signals for local UI and a thin `ResumeStateService` for builder state; consider NgRx only if complexity grows.

## Builder structure
- ResumeEditorComponent (container)
  - LeftRail
    - SectionsNav (P)
    - ATSCheckTab (P)
    - TemplatesTab (P)
  - EditorPane (C)
    - SectionForms: SummaryForm, ExperienceList + ExperienceItem, EducationList, SkillsForm, ProjectsList
  - PreviewPane (P) live-renders selected template with current state
  - Toolbar (P): export, share, version, template switch

## Key shared components (new)
- PageHeader, EmptyState, SplitPane, SidePanel, StepperLite, InlineActionsMenu, ScoreBadge, KeywordChips

## Services
- ResumeStateService: holds resume draft, selected template, JD text, and ats score
- AiService: generate/transform text
- AtsService (new): compute ats checks client-side; call backend for advanced checks later
- TemplatesService: list and fetch templates and previews
