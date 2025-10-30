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
  templateUrl: './job-results.component.html',
  styleUrls: ['./job-results.component.scss']
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
