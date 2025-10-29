import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cover-letter-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <section class="page cover-letter">
      <h2>Edit Cover Letter</h2>
      <mat-card>
        <form [formGroup]="form" class="gap-16">
          <mat-form-field appearance="outline" class="full"><mat-label>Body</mat-label><textarea rows="12" matInput formControlName="body"></textarea></mat-form-field>
          <div class="actions">
            <button mat-stroked-button color="primary">Save Draft</button>
            <button mat-raised-button color="primary">Download PDF</button>
          </div>
        </form>
      </mat-card>
    </section>
  `,
  styles: [`.page{padding:24px}.actions{display:flex;gap:8px;justify-content:flex-end}`]
})
export class CoverLetterEditComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) { this.form = this.fb.group({ body: ['Dear Hiring Manager, ...'] }); }
}
