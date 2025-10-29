import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin-templates',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <section class="page admin">
      <h2>Templates</h2>
      <div class="grid">
        <mat-card *ngFor="let t of templates" class="tpl">
          <div class="thumb">Preview</div>
          <h3>{{t.name}}</h3>
          <button mat-stroked-button>Disable</button>
        </mat-card>
      </div>
    </section>
  `,
  styles: [`.page{padding:24px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}.thumb{height:140px;background:#f3f4f6;border-radius:8px;margin-bottom:8px;display:grid;place-items:center;color:#6b7280}`]
})
export class AdminTemplatesComponent {
  templates = [ {name:'Modern'}, {name:'Classic'}, {name:'Minimal'} ];
}
