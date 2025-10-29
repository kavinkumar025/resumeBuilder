import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <section class="page jobs">
      <mat-card>
        <h2>Senior Frontend Engineer</h2>
        <p class="meta">Acme Corp • Remote • ₹25–35 LPA</p>
        <p>
          We are looking for a passionate engineer with strong Angular/TypeScript and UX sensibilities.
        </p>
        <div class="actions">
          <button mat-raised-button color="primary">Apply</button>
          <button mat-stroked-button>Save</button>
        </div>
      </mat-card>
    </section>
  `,
  styles: [`.page{padding:24px}.meta{color:#6b7280}.actions{display:flex;gap:8px}`]
})
export class JobDetailComponent {}
