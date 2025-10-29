import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cover-letter-generate',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <div class="page-center">
      <mat-card class="elevated-card">
        <h2>Generate Cover Letter</h2>
        <form [formGroup]="form" class="gap-16" (ngSubmit)="generate()">
          <mat-form-field appearance="outline" class="full"><mat-label>Job title</mat-label><input matInput formControlName="title" /></mat-form-field>
          <mat-form-field appearance="outline" class="full"><mat-label>Company</mat-label><input matInput formControlName="company" /></mat-form-field>
          <mat-form-field appearance="outline" class="full"><mat-label>Job description</mat-label><textarea rows="5" matInput formControlName="jd"></textarea></mat-form-field>
          <button mat-raised-button color="primary" [disabled]="form.invalid">Generate</button>
        </form>
      </mat-card>
    </div>
  `,
  styles: [``]
})
export class CoverLetterGenerateComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ title: ['', Validators.required], company: ['', Validators.required], jd: [''] });
  }
  generate() {/* TODO: invoke AiService and navigate to edit */}
}
