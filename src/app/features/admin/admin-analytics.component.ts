import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-admin-analytics',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <section class="page admin">
      <h2>Revenue Analytics</h2>
      <div class="grid">
        <mat-card class="stat"><h3>MRR</h3><div class="value">₹12,340</div></mat-card>
        <mat-card class="stat"><h3>Active Users</h3><div class="value">1,245</div></mat-card>
        <mat-card class="stat"><h3>Churn</h3><div class="value">2.1%</div></mat-card>
      </div>
      <mat-card>Charts coming soon…</mat-card>
    </section>
  `,
  styles: [`.page{padding:24px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:16px}.value{font-size:24px;font-weight:700}`]
})
export class AdminAnalyticsComponent {}
