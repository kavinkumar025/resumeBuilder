import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-template-selection',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <section class="page resume">
      <h2>Choose a template</h2>
      <div class="grid">
        <mat-card class="tpl" *ngFor="let t of templates">
          <div class="thumb">{{ t.name }}</div>
          <p>{{ t.desc }}</p>
          <div class="actions">
            <button mat-stroked-button>Preview</button>
            <button mat-raised-button color="primary">Use this</button>
          </div>
        </mat-card>
      </div>
    </section>
  `,
  styles: [`.page{padding:24px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}.tpl .thumb{height:160px;background:#f3f4f6;border-radius:8px;margin-bottom:8px;display:grid;place-items:center;color:#6b7280}.actions{display:flex;gap:8px}`]
})
export class TemplateSelectionComponent {
  templates = [
    { name: 'Modern', desc: 'Bold headers with clean layout.' },
    { name: 'Classic', desc: 'Traditional with clear sections.' },
    { name: 'Minimal', desc: 'Whitespace-forward and ATS-safe.' }
  ];
}
