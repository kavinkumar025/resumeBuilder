# ResumeBuilder

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

## UI Flow Diagram

The end-to-end navigation map for the 13 main screens lives in `docs/ui-flow.md`.

GitHub renders Mermaid diagrams inline. Quick view:

```mermaid
flowchart TD
	L([Landing / Home]) -->|CTA| LG[Login]
	L --> PRC[Pricing]
	LG --> D[Dashboard]
	D --> RI[Resume - AI Input]
	D --> CLG[Cover Letter - Generate]
	D --> JS[Jobs - Search]
	JS --> JR[Results] --> JD[Detail /jobs/:id]
	D --> JT[Application Tracker]
	D --> PF[Profile]
	D --> ST[Settings]
	D --> HELP[Help]
	AL[Admin Login] --> AU[Admin Users]
```

For the full flow with all nodes and notes, open: `docs/ui-flow.md`.

## Component Breakdown

Detailed per-screen component/service/guard diagrams are available in `docs/component-breakdown.md`.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
