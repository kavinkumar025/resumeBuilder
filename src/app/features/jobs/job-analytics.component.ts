import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-job-analytics',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <section class="page jobs">
      <h2>Job Analytics</h2>
      <div class="grid">
        <mat-card class="stat">
          <h3>Applied</h3>
          <div class="value">12</div>
        </mat-card>
        <mat-card class="stat">
          <h3>Interviews</h3>
          <div class="value">3</div>
        </mat-card>
        <mat-card class="stat">
          <h3>Offers</h3>
          <div class="value">1</div>
        </mat-card>
      </div>
      <mat-card>Charts coming soon…</mat-card>
    </section>
  `,
  styles: [`.page{padding:24px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:16px}.value{font-size:28px;font-weight:700}`]
})
export class JobAnalyticsComponent {}
