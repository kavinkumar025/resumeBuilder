import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-resume-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  template: `
    <section class="resume container">
      <header class="header">
        <h2>Edit resume</h2>
        <div class="tools">
          <button mat-stroked-button color="primary"><mat-icon>save</mat-icon> Save</button>
          <button mat-raised-button color="primary"><mat-icon>visibility</mat-icon> Preview</button>
        </div>
      </header>

      <div class="resume-grid">
        <mat-card class="editor">
          <form class="form" [formGroup]="form">
            <mat-form-field appearance="outline" class="full"><mat-label>Headline</mat-label><input matInput formControlName="headline" /></mat-form-field>
            <mat-form-field appearance="outline" class="full"><mat-label>Summary</mat-label><textarea rows="6" matInput formControlName="summary"></textarea></mat-form-field>
            <mat-form-field appearance="outline" class="full"><mat-label>Skills (comma separated)</mat-label><input matInput formControlName="skills" /></mat-form-field>
          </form>
        </mat-card>

        <mat-card class="preview">
          <div class="preview-inner">
            <h3 class="name">{{ form.value.headline || 'Your Headline' }}</h3>
            <p class="summary" [class.placeholder]="!form.value.summary">{{ form.value.summary || 'Write a compelling summary to highlight your strengths and experience.' }}</p>
            <div class="skills" *ngIf="(form.value.skills || '').length; else noSkills">
              <span class="chip" *ngFor="let s of skillsArray">{{ s }}</span>
            </div>
            <ng-template #noSkills>
              <div class="muted">Add a few skills separated by commas (e.g. Angular, TypeScript, Node.js)</div>
            </ng-template>
          </div>
        </mat-card>
      </div>
    </section>
  `,
  styles: [`
    .resume { padding: 24px; }
    .header { display:flex; align-items:center; justify-content:space-between; margin-bottom: 12px; gap: 8px; }
    .tools button mat-icon { margin-right: 6px; }
    .resume-grid { display:grid; grid-template-columns: 1fr; gap: 12px; }
    @media (min-width: 960px) { .resume-grid { grid-template-columns: 1.1fr .9fr; align-items: start; } }
    .editor { padding: 8px 16px; }
    .form { display:grid; gap: 12px; }
    .full { width: 100%; }
    .preview { position: sticky; top: 88px; }
    .preview-inner { display:grid; gap: 10px; }
    .name { font-size: 20px; font-weight: 700; }
    .summary { color: var(--text); }
    .summary.placeholder { color: var(--text-muted); }
    .skills { display:flex; flex-wrap: wrap; gap: 8px; }
    .chip { padding: 4px 10px; border-radius: 999px; border:1px solid var(--border); background: var(--surface-2); font-size: 12px; }
    .muted { color: var(--text-muted); font-size: 14px; }
  `]
})
export class ResumeEditorComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ headline: [''], summary: [''], skills: [''] });
  }

  get skillsArray(): string[] {
    const raw = (this.form?.value?.skills || '') as string;
    return raw.split(',').map(s => s.trim()).filter(Boolean);
  }
}
