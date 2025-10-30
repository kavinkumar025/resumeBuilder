import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-resume-history',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule],
  templateUrl: './resume-history.component.html',
  styleUrls: ['./resume-history.component.scss']
})
export class ResumeHistoryComponent {
  items = [
    { title: 'Software Engineer Resume', date: '2025-10-01' },
    { title: 'Frontend Developer Resume', date: '2025-09-12' }
  ];
}
