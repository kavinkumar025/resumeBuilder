import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <mat-card>
      <h1>Job Search</h1>
      <form [formGroup]="form" (ngSubmit)="search()">
        <mat-form-field class="full" appearance="outline"><mat-label>Keyword</mat-label><input matInput formControlName="keyword" /></mat-form-field>
        <mat-form-field class="full" appearance="outline"><mat-label>Location</mat-label><input matInput formControlName="location" /></mat-form-field>
        <button mat-raised-button color="primary">Search</button>
      </form>
    </mat-card>
  `,
  styles: [`.full{width:100%;max-width:640px;display:block}`]
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
