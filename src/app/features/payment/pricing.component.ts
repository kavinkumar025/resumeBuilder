import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { PaymentService } from '../../core/services/payment.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <h1>Pricing</h1>
    <div class="plans">
      <mat-card>
        <h2>Free</h2>
        <ul>
          <li>Basic templates</li>
          <li>1 AI resume/month</li>
        </ul>
      </mat-card>
      <mat-card>
        <h2>Premium</h2>
        <ul>
          <li>Unlimited AI generation</li>
          <li>Download PDFs</li>
          <li>Smart analytics</li>
        </ul>
        <button mat-raised-button color="primary" (click)="upgrade(199)">Upgrade ₹199</button>
      </mat-card>
    </div>
  `,
  styles: [`.plans{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}`]
})
export class PricingComponent {
  constructor(private payments: PaymentService, private router: Router) {}
  upgrade(amount: number){
    this.payments.createCheckout(amount).subscribe(() => this.router.navigateByUrl('/payment/success'));
  }
}
