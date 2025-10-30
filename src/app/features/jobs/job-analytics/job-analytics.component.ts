import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-job-analytics',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './job-analytics.component.html',
  styleUrls: ['./job-analytics.component.scss']
})
export class JobAnalyticsComponent {}
