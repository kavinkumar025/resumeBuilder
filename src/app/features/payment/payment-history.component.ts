import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent {
  displayed = ['date','plan','amount','actions'];
  rows = [
    { date: '2025-10-01', plan: 'Premium Yearly', amount: 499 },
    { date: '2024-10-01', plan: 'Premium Yearly', amount: 499 }
  ];
}
