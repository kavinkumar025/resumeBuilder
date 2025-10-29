import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-resume-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <section class="page resume">
      <h2>Edit resume</h2>
      <mat-card class="editor">
        <form class="grid" [formGroup]="form">
          <mat-form-field appearance="outline" class="full"><mat-label>Headline</mat-label><input matInput formControlName="headline" /></mat-form-field>
          <mat-form-field appearance="outline" class="full"><mat-label>Summary</mat-label><textarea rows="5" matInput formControlName="summary"></textarea></mat-form-field>
          <mat-form-field appearance="outline" class="full"><mat-label>Skills (comma separated)</mat-label><input matInput formControlName="skills" /></mat-form-field>
        </form>
        <div class="actions">
          <button mat-stroked-button color="primary">Save Draft</button>
          <button mat-raised-button color="primary">Go to Preview</button>
        </div>
      </mat-card>
    </section>
  `,
  styles: [`.page{padding:24px}.editor{padding:8px 16px}.grid{display:grid;gap:12px}.full{width:100%}.actions{display:flex;gap:8px;justify-content:flex-end}`]
})
export class ResumeEditorComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ headline: [''], summary: [''], skills: [''] });
  }
}
