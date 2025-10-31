import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
 
})
export class HomeDashboardComponent {
  stats = [
    { icon: 'article', label: 'Resumes', value: '2', change: 0, color: 'primary' },
    { icon: 'work', label: 'Jobs Applied', value: '5', change: 25, color: 'secondary' },
    { icon: 'workspace_premium', label: 'Plan', value: 'Free', change: 0, color: 'accent' }
  ];

  recentResumes = [
    { title: 'Software Engineer Resume', date: '2 days ago' },
    { title: 'Product Manager Resume', date: '1 week ago' }
  ];
}
