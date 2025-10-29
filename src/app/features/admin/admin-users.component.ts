import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  template: `
    <section class="page admin">
      <h2>Users</h2>
      <table mat-table [dataSource]="rows" class="mat-elevation-z1 full">
        <ng-container matColumnDef="email">
          <th mat-header-cell *matHeaderCellDef> Email </th>
          <td mat-cell *matCellDef="let r"> {{r.email}} </td>
        </ng-container>
        <ng-container matColumnDef="plan">
          <th mat-header-cell *matHeaderCellDef> Plan </th>
          <td mat-cell *matCellDef="let r"> {{r.plan}} </td>
        </ng-container>
        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let r"><button mat-button>Impersonate</button></td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayed"></tr>
        <tr mat-row *matRowDef="let row; columns: displayed;"></tr>
      </table>
    </section>
  `,
  styles: [`.page{padding:24px}.full{width:100%}`]
})
export class AdminUsersComponent {
  displayed = ['email','plan','actions'];
  rows = [
    { email: 'alice@example.com', plan: 'Premium' },
    { email: 'bob@example.com', plan: 'Free' }
  ];
}
