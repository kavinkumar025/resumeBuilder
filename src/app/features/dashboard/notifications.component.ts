import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  items = [
    { title: 'Resume generated successfully', time: '2h ago' },
    { title: '3 jobs matched your profile', time: '1d ago' }
  ];
}
