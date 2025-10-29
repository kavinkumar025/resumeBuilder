import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, MatListModule],
  template: `
    <section class="page dashboard">
      <h2>Notifications</h2>
      <mat-list>
        <mat-list-item *ngFor="let n of items">
          <div matListItemTitle>{{ n.title }}</div>
          <div matListItemLine>{{ n.time }}</div>
        </mat-list-item>
      </mat-list>
    </section>
  `,
  styles: [`.page{padding:24px}`]
})
export class NotificationsComponent {
  items = [
    { title: 'Resume generated successfully', time: '2h ago' },
    { title: '3 jobs matched your profile', time: '1d ago' }
  ];
}
