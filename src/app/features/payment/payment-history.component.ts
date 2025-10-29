import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  template: `
    <section class="page payment">
      <h2>Payment History</h2>
      <table mat-table [dataSource]="rows" class="mat-elevation-z1 full">
        <ng-container matColumnDef="date">
          <th mat-header-cell *matHeaderCellDef> Date </th>
          <td mat-cell *matCellDef="let r"> {{r.date}} </td>
        </ng-container>
        <ng-container matColumnDef="plan">
          <th mat-header-cell *matHeaderCellDef> Plan </th>
          <td mat-cell *matCellDef="let r"> {{r.plan}} </td>
        </ng-container>
        <ng-container matColumnDef="amount">
          <th mat-header-cell *matHeaderCellDef> Amount </th>
          <td mat-cell *matCellDef="let r"> ₹{{r.amount}} </td>
        </ng-container>
        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let r"><button mat-button>Invoice</button></td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayed"></tr>
        <tr mat-row *matRowDef="let row; columns: displayed;"></tr>
      </table>
    </section>
  `,
  styles: [`.page{padding:24px}.full{width:100%}`]
})
export class PaymentHistoryComponent {
  displayed = ['date','plan','amount','actions'];
  rows = [
    { date: '2025-10-01', plan: 'Premium Yearly', amount: 499 },
    { date: '2024-10-01', plan: 'Premium Yearly', amount: 499 }
  ];
}
