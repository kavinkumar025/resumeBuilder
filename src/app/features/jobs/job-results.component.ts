import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService, JobSummary } from '../../core/services/jobs.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-job-results',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <h1>Job Results</h1>
    <div class="grid">
      <mat-card *ngFor="let job of jobs" class="card">
        <mat-card-title>{{ job.title }}</mat-card-title>
        <mat-card-subtitle>{{ job.company }} — {{ job.location }}</mat-card-subtitle>
        <button mat-button color="primary" (click)="open(job)">View</button>
      </mat-card>
    </div>
  `,
  styles: [`.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px}.card{padding:8px}`]
})
export class JobResultsComponent {
  jobs: JobSummary[] = [];
  constructor(private route: ActivatedRoute, private jobsSvc: JobsService, private router: Router){
    this.route.queryParams.subscribe(q => {
      this.jobsSvc.searchJobs({ keyword: q['keyword'] || '', location: q['location'] || ''}).subscribe(list => this.jobs = list);
    });
  }
  open(job: JobSummary){ this.router.navigateByUrl('/jobs/detail'); }
}
