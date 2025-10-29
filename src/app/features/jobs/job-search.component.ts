import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  template: `
    <section class="container job-search">
      <mat-card class="search-card">
        <div class="title">
          <mat-icon>search</mat-icon>
          <h2>Find your next role</h2>
        </div>
        <form class="grid" [formGroup]="form" (ngSubmit)="search()">
          <mat-form-field appearance="outline"><mat-label>Keyword</mat-label><input matInput formControlName="keyword" placeholder="e.g. Angular developer" /></mat-form-field>
          <mat-form-field appearance="outline"><mat-label>Location</mat-label><input matInput formControlName="location" placeholder="e.g. Chennai" /></mat-form-field>
          <button class="submit" mat-raised-button color="primary"><mat-icon>search</mat-icon> Search</button>
        </form>
      </mat-card>
    </section>
  `,
  styles: [`
    .job-search { padding: 24px; }
    .search-card { padding: 12px 16px; }
    .title { display:flex; align-items:center; gap: 8px; margin-bottom: 8px; }
    .grid { display:grid; grid-template-columns: 1fr; gap: 12px; }
    @media (min-width: 720px) { .grid { grid-template-columns: 1fr 1fr auto; align-items: center; } }
    .submit mat-icon { margin-right: 6px; }
  `]
})
export class JobSearchComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({ keyword: [''], location: [''] });
  }
  search(){
    const q = new URLSearchParams(this.form.getRawValue() as any).toString();
    this.router.navigateByUrl('/jobs/results' + (q ? `?${q}` : ''));
  }
}
