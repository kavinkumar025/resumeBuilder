import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, RouterLink],
  template: `
    <div class="page-center">
      <mat-card class="elevated-card" style="text-align:center">
        <mat-icon color="primary" style="font-size:48px;height:48px;width:48px">check_circle</mat-icon>
        <h2>Payment Successful</h2>
        <p>Your account is upgraded to Premium.</p>
        <div class="actions">
          <a mat-raised-button color="primary" routerLink="/dashboard">Go to Dashboard</a>
          <a mat-button routerLink="/payment/history">View History</a>
        </div>
      </mat-card>
    </div>
  `,
  styles: [`.actions{display:flex;gap:8px;justify-content:center}`]
})
export class PaymentSuccessComponent {}
