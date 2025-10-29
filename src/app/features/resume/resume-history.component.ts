import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-resume-history',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule],
  template: `
    <section class="page resume">
      <h2>Resume History</h2>
      <mat-nav-list>
        <a mat-list-item *ngFor="let item of items">
          <span matListItemTitle>{{ item.title }}</span>
          <span matListItemLine>{{ item.date }}</span>
          <span class="spacer"></span>
          <button mat-button>Preview</button>
          <button mat-stroked-button>Download</button>
        </a>
      </mat-nav-list>
    </section>
  `,
  styles: [`.page{padding:24px}.spacer{flex:1}`]
})
export class ResumeHistoryComponent {
  items = [
    { title: 'Software Engineer Resume', date: '2025-10-01' },
    { title: 'Frontend Developer Resume', date: '2025-09-12' }
  ];
}
