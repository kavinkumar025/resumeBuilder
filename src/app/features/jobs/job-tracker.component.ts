import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-job-tracker',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSelectModule, MatButtonModule],
  template: `
    <section class="page jobs">
      <h2>Application Tracker</h2>
      <table mat-table [dataSource]="rows" class="mat-elevation-z1 full">
        <ng-container matColumnDef="title">
          <th mat-header-cell *matHeaderCellDef> Job </th>
          <td mat-cell *matCellDef="let r"> {{r.title}} </td>
        </ng-container>
        <ng-container matColumnDef="company">
          <th mat-header-cell *matHeaderCellDef> Company </th>
          <td mat-cell *matCellDef="let r"> {{r.company}} </td>
        </ng-container>
        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef> Status </th>
          <td mat-cell *matCellDef="let r">
            <mat-select [value]="r.status">
              <mat-option value="applied">Applied</mat-option>
              <mat-option value="interview">Interview</mat-option>
              <mat-option value="offer">Offer</mat-option>
              <mat-option value="rejected">Rejected</mat-option>
            </mat-select>
          </td>
        </ng-container>
        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let r"><button mat-button>Notes</button></td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayed"></tr>
        <tr mat-row *matRowDef="let row; columns: displayed;"></tr>
      </table>
    </section>
  `,
  styles: [`.page{padding:24px}.full{width:100%}`]
})
export class JobTrackerComponent {
  displayed = ['title','company','status','actions'];
  rows = [
    { title: 'Frontend Engineer', company: 'Acme', status: 'applied' },
    { title: 'UI Developer', company: 'Globex', status: 'interview' }
  ];
}
