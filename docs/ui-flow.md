# UI Flow Diagram

This diagram maps the 13 main screens and primary navigation paths for the AI Resume Builder platform.

```mermaid
flowchart TD
  %% Groups
  subgraph Public
    L["Landing / Home\n/ (public)"]
    LG["Login\n/login"]
    SG["Register\n/signup"]
    FG["Forgot Password\n/forgot"]
    PRC["Pricing\n/pricing"]
    HELP["Help / Support\n/help"]
  end

  subgraph App[Authenticated App]
    D["Dashboard\n/dashboard"]
    PF["Profile & Career Input\n/profile/info"]
    EDU["Education\n/profile/education"]
    EXP["Work Experience\n/profile/experience"]
    SK["Skills & Certifications\n/profile/skills"]

    subgraph Resume[AI Resume Builder]
      RT["Template Gallery\n/resume/templates"]
      RI["AI Input\n/resume/input"]
      RP["Preview\n/resume/preview"]
      RD["Download / Save\n/resume/download"]
    end

    subgraph CL[AI Cover Letter]
      CLG["Generate\n/cover-letter/generate"]
      CLE["Edit\n/cover-letter/edit"]
    end

    subgraph Jobs[Jobs]
      JS["Search\n/jobs/search"]
      JR["Results\n/jobs/results"]
      JD["Detail\n/jobs/:id"]
      JT["Application Tracker\n/jobs/tracker"]
    end

    ST["Settings / Account\n/settings"]
  end

  subgraph Admin[Admin]
    AL["Admin Login\n/admin/login"]
    AU["Users\n/admin/users"]
    AT["Templates\n/admin/templates"]
    AA["Analytics\n/admin/analytics"]
  end

  %% Public flows
  L -->|CTA Create Resume| LG
  L --> PRC
  L --> HELP
  LG --> D
  SG --> D
  FG --> LG

  %% Dashboard quick links
  D -->|Quick Link| RI
  D -->|Quick Link| CLG
  D -->|Quick Link| JT
  D --> PF
  D --> PRC

  %% Profile expanded
  PF --> EDU --> EXP --> SK

  %% Resume builder flow
  RI --> RT
  RT --> RP
  RP --> RD
  RD --> D

  %% Cover letter flow
  CLG --> CLE --> RD

  %% Jobs flow
  JS --> JR --> JD
  JD -->|Apply| JT
  JR -->|Save Job| JT

  %% Settings & help
  D --> ST
  D --> HELP

  %% Admin
  AL --> AU
  AU --> AT --> AA

  %% Guards & access notes
  classDef note fill:#eef5ff,stroke:#5b8def,color:#0f2440;
```

## Notes
- Routes under "Authenticated App" require AuthGuard. Admin routes require AdminGuard.
- Some premium features (advanced templates, AI cover letter, job match) are gated behind subscription checks.
- Temporary SSR constraint: if prerendering is enabled, parameterized route `/jobs/:id` must be excluded from prerender or provided with `getPrerenderParams`. For now, we can server-render only for that route.
- Export actions create PDFs and optionally save HTML/PDF to Firebase Storage with metadata in Firestore.

## Next
- Confirm naming for education/skills routes you prefer; we can align to your conventions.
- I can also generate wireframe thumbnails for each screen or a component breakdown diagram, on request.
