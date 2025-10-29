import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule],
  template: `
    <section class="page dashboard">
      <h2>Welcome back</h2>
      <div class="grid">
        <mat-card class="stat"><h3>Resumes</h3><div class="value">2</div></mat-card>
        <mat-card class="stat"><h3>Jobs Applied</h3><div class="value">5</div></mat-card>
        <mat-card class="stat"><h3>Plan</h3><div class="value">Free</div></mat-card>
      </div>

      <div class="quick">
        <mat-card>
          <h3>Create Resume</h3>
          <p>Start with AI to craft a strong summary and bullets.</p>
          <a mat-raised-button color="primary" routerLink="/resume/input">Open Builder</a>
        </mat-card>
        <mat-card>
          <h3>AI Cover Letter</h3>
          <p>Generate a personalized letter in seconds.</p>
          <a mat-stroked-button routerLink="/cover-letter/generate">Generate</a>
        </mat-card>
        <mat-card>
          <h3>Job Tracker</h3>
          <p>Stay on top of applications and interviews.</p>
          <a mat-stroked-button routerLink="/jobs/tracker">Open Tracker</a>
        </mat-card>
      </div>
    </section>
  `,
  styles: [`.page{padding:24px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px}.value{font-size:28px;font-weight:700}.quick{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin-top:12px}`]
})
export class HomeDashboardComponent {}
