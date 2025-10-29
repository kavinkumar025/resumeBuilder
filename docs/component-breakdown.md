# Component-Level Breakdown (by Screen)

This document outlines container vs presentational components, services, and guards for each of the 13 screens. It references existing components in `src/app/**` and notes planned items (TODO) where relevant.

Legend:
- Rectangles: Components (C = container, P = presentational)
- Parallelograms: Services
- Cylinders: State
- Hexagons: Guards

---

## 1) Landing / Home

```mermaid
flowchart LR
  L[C: LandingShellComponent] --> H[P: HeroSection]
  L --> F[P: FeaturesGrid]
  L --> PR[P: PricingTeaser]
  L --> FT[P: Footer]
  L -.router.-> |/login| LG[P: Login link]
```

Notes: Static content; optional animation directives. No guard.

---

## 2) Authentication (Login / Register / Forgot)

```mermaid
flowchart LR
  subgraph Auth
    LG[C: LoginComponent]
    SG[C: SignupComponent]
    FG[C: ForgotPasswordComponent]
  end
  AS[(AuthService)]
  LG -- submit --> AS
  SG -- submit --> AS
  FG -- send reset --> AS
```

Notes: Uses `AuthService`. Routes are public; success navigates to `/dashboard`.

---

## 3) Dashboard

```mermaid
flowchart LR
  D[C: HomeDashboardComponent] -- guard --> AG{{AuthGuard}}
  D --> QS[P: QuickStartCards]
  D --> PS[P: PlanStatusBanner]
  D --> NL[P: NotificationsSnippet]
  US[(UserService)] --> D
```

Notes: Guarded by `AuthGuard`. Pulls minimal profile from `UserService`.

---

## 4) Profile & Career Input

```mermaid
flowchart LR
  PF[C: UserInfoFormComponent] -- guard --> AG{{AuthGuard}}
  EX[C: ExperienceSkillsComponent] --- PF
  US[(UserService)] <--> PF
  US <--> EX
  ST[(ResumeStateService)] <--> PF
```

Notes: Reactive forms; save/update to `UserService` (Firestore in future). `ResumeStateService` can hydrate resume fields.

---

## 5) AI Resume Builder

```mermaid
flowchart LR
  RI[C: AiInputComponent] -- guard --> AG{{AuthGuard}}
  RP[C: AiPreviewComponent] --- RI
  RD[C: ResumeDownloadComponent] --- RP
  AI[/AiService/] --> RI
  ST[(ResumeStateService)] <--> RI
  ST <--> RP
```

Notes: `AiService` generates content; state stores latest draft; `ResumeDownloadComponent` exports PDF.

---

## 6) AI Cover Letter

```mermaid
flowchart LR
  CLG[C: CoverLetterGenerateComponent] -- guard --> AG{{AuthGuard}}
  CLE[C: CoverLetterEditComponent] --- CLG
  AI[/AiService/] --> CLG
```

Notes: Similar to resume generation; optional save to profile later.

---

## 7) Job Search & Match

```mermaid
flowchart LR
  JS[C: JobSearchComponent] -- guard --> AG{{AuthGuard}}
  JR[C: JobResultsComponent] --- JS
  JD[C: JobDetailComponent] --- JR
  JT[C: JobTrackerComponent] --- JS
  JB[/JobsService/] --> JS
  JB --> JR
  JB --> JD
```

Notes: SSR-safe handling needed for `/jobs/:id` (server-only render or exclude from prerender). `JobTrackerComponent` persists to CRUD later.

---

## 8) Application Tracker

```mermaid
flowchart LR
  JT[C: JobTrackerComponent] -- guard --> AG{{AuthGuard}}
  DB[(UserService - jobs subcol)] <--> JT
```

Notes: Will use Firestore CRUD for rows and status updates.

---

## 9) Payment / Subscription

```mermaid
flowchart LR
  PRC[C: PricingComponent] --> CH[C: PaymentSuccessComponent]
  PH[C: PaymentHistoryComponent] -- guard --> AG{{AuthGuard}}
  PY[/PaymentService/] --> PRC
  PY --> CH
  US[(UserService)] <--> CH
```

Notes: Razorpay integration via `PaymentService`; success upgrades plan (via `UserService`). A future `SubscriptionGuard` can gate premium features.

---

## 10) Resume Template Gallery

```mermaid
flowchart LR
  TG[C: TemplateGalleryComponent] -- guard --> AG{{AuthGuard}}
  TP[P: TemplateCard] --- TG
  ST[(ResumeStateService)] <--> TG
```

Notes: Gallery feeds preview and selection; chosen template influences preview/download.

---

## 11) Settings / Account

```mermaid
flowchart LR
  STG[C: SettingsComponent] -- guard --> AG{{AuthGuard}}
  US[(UserService)] <--> STG
  AS[(AuthService)] <--> STG
```

Notes: Update profile basics, change password; optional dark mode toggle stored in profile.

---

## 12) Admin Dashboard

```mermaid
flowchart LR
  AL[C: AdminLoginComponent]
  AU[C: AdminUsersComponent] -- guard --> ADG{{AdminGuard}}
  AT[C: AdminTemplatesComponent] -- guard --> ADG
  AA[C: AdminAnalyticsComponent] -- guard --> ADG
  AS[(AuthService)] <--> AL
  US[(UserService)] <--> AU
```

Notes: Separate auth path; admin views require `AdminGuard`.

---

## 13) Help / Support / Contact

```mermaid
flowchart LR
  HP[C: HelpComponent]
  CF[P: ContactForm] --- HP
  US[(UserService - support col)] <--> CF
```

Notes: Public by default; can optionally require auth to prefill user data.

---

## Cross-cutting Services & Modals

```mermaid
flowchart LR
  subgraph Core Services
    AS[(AuthService)]
    US[(UserService)]
    AI[/AiService/]
    JB[/JobsService/]
    PY[/PaymentService/]
    ST[(ResumeStateService)]
  end

  subgraph Shared Modals
    CD[P: ConfirmDeleteModal]
    SD[P: SaveDraftModal]
    UP[P: UpgradeModal]
    SH[P: ShareModal]
    FB[P: FeedbackModal]
  end
```

- Modals are invoked via `MatDialog` from feature containers.
- Premium checks: `UpgradeModal` prompts on locked actions when plan is free.

---

## Guarding Strategy

- `AuthGuard`: Required for all authenticated routes (dashboard, profile, resume, cover letter, jobs, settings, payment history).
- `AdminGuard`: Required for admin routes.
- `SubscriptionGuard` (TODO): Gate premium features (advanced templates, AI cover letter, job match). Can piggyback on `UserService` plan status.

---

## Data Notes (high level)

- User: `{ uid, email, name, phone, location, summary, plan, updatedAt }`
- Resume Draft: `{ uid, templateId, blocks, generatedAt }` stored in state and persisted to Firestore later.
- Job Tracker Row: `{ uid, jobId, title, company, appliedAt, status, notes }`.

---

If you want, I can export each diagram as SVG for embedding in docs or a wiki.
