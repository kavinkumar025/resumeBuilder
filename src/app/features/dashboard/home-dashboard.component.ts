import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <section class="dashboard container">
      <header class="header">
        <h2>Welcome back</h2>
        <a mat-stroked-button color="primary" routerLink="/resume/input">
          <mat-icon>add</mat-icon>
          New Resume
        </a>
      </header>

      <div class="stats">
        <mat-card class="stat">
          <div class="icon"><mat-icon>article</mat-icon></div>
          <div class="label">Resumes</div>
          <div class="value">2</div>
        </mat-card>
        <mat-card class="stat">
          <div class="icon"><mat-icon>work</mat-icon></div>
          <div class="label">Jobs Applied</div>
          <div class="value">5</div>
        </mat-card>
        <mat-card class="stat">
          <div class="icon"><mat-icon>workspace_premium</mat-icon></div>
          <div class="label">Plan</div>
          <div class="value">Free</div>
        </mat-card>
      </div>

      <div class="quick">
        <mat-card class="action">
          <div class="action__header">
            <mat-icon>auto_awesome</mat-icon>
            <h3>Create Resume</h3>
          </div>
          <p>Start with AI to craft a strong summary and bullets.</p>
          <a mat-raised-button color="primary" routerLink="/resume/input">Open Builder</a>
        </mat-card>
        <mat-card class="action">
          <div class="action__header">
            <mat-icon>mail</mat-icon>
            <h3>AI Cover Letter</h3>
          </div>
          <p>Generate a personalized letter in seconds.</p>
          <a mat-stroked-button routerLink="/cover-letter/generate">Generate</a>
        </mat-card>
        <mat-card class="action">
          <div class="action__header">
            <mat-icon>timeline</mat-icon>
            <h3>Job Tracker</h3>
          </div>
          <p>Stay on top of applications and interviews.</p>
          <a mat-stroked-button routerLink="/jobs/tracker">Open Tracker</a>
        </mat-card>
      </div>
    </section>
  `,
  styles: [`
    .dashboard { padding: 24px; }
    .header { display:flex; align-items:center; justify-content:space-between; margin-bottom: 12px; }
    .stats { display:grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); gap: 12px; }
    .stat { display:grid; grid-template-columns: 40px 1fr auto; align-items:center; gap: 8px; padding: 12px; }
    .stat .icon mat-icon { color: var(--md-sys-color-primary); }
    .stat .label { color: var(--text-muted); font-size: 14px; }
    .stat .value { font-size: 22px; font-weight: 700; }
    .quick { display:grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); gap: 12px; margin-top: 16px; }
    .action { display:grid; gap: 8px; }
    .action__header { display:flex; align-items:center; gap: 8px; }
    .action__header mat-icon { color: var(--md-sys-color-primary); }
  `]
})
export class HomeDashboardComponent {}
