import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { PaymentService } from '../../core/services/payment.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <section class="container pricing">
      <header class="header">
        <h1>Simple pricing</h1>
        <p class="sub">Choose a plan that grows with your career.</p>
      </header>
      <div class="plans">
        <mat-card class="plan">
          <h2>Free</h2>
          <div class="price">₹0</div>
          <ul class="features">
            <li><mat-icon>check</mat-icon> Basic templates</li>
            <li><mat-icon>check</mat-icon> 1 AI resume/month</li>
            <li class="muted"><mat-icon>close</mat-icon> PDF exports</li>
          </ul>
          <button mat-stroked-button>Get Started</button>
        </mat-card>

        <mat-card class="plan popular" appearance="outlined">
          <div class="badge">Popular</div>
          <h2>Premium</h2>
          <div class="price">₹199<span class="period">/mo</span></div>
          <ul class="features">
            <li><mat-icon>check</mat-icon> Unlimited AI generation</li>
            <li><mat-icon>check</mat-icon> All templates</li>
            <li><mat-icon>check</mat-icon> PDF exports</li>
            <li><mat-icon>check</mat-icon> Smart analytics</li>
          </ul>
          <button mat-raised-button color="primary" (click)="upgrade(199)">Upgrade</button>
        </mat-card>
      </div>
    </section>
  `,
  styles: [`
    .pricing { padding: 24px; }
    .header { text-align: center; margin-bottom: 16px; }
    .sub { color: var(--text-muted); margin-top: 4px; }
    .plans { display:grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); gap: 16px; align-items: stretch; }
    .plan { position: relative; display:grid; gap: 8px; padding-bottom: 16px; }
    .price { font-size: 28px; font-weight: 700; }
    .period { font-size: 14px; color: var(--text-muted); margin-left: 2px; }
    .features { display:grid; gap: 6px; padding: 0; }
    .features li { display:flex; align-items:center; gap: 8px; }
    .features .muted { color: var(--text-muted); }
    .badge { position: absolute; right: 12px; top: 12px; background: #eef2ff; color: #3730a3; padding: 2px 8px; border-radius: 999px; font-size: 12px; }
    .popular { outline: 2px solid rgba(99,102,241,0.35); }
  `]
})
export class PricingComponent {
  constructor(private payments: PaymentService, private router: Router) {}
  upgrade(amount: number){
    this.payments.createCheckout(amount).subscribe(() => this.router.navigateByUrl('/payment/success'));
  }
}
