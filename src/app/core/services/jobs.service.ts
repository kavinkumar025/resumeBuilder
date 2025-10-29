import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface JobSummary { id: string; title: string; company: string; location?: string; }

@Injectable({ providedIn: 'root' })
export class JobsService {
  searchJobs(query: { keyword: string; location?: string }): Observable<JobSummary[]> {
    // TODO: Integrate RapidAPI / Naukri
    return of([
      { id: '1', title: 'Frontend Developer', company: 'Acme Corp', location: 'Remote' },
      { id: '2', title: 'Angular Engineer', company: 'Tech Labs', location: 'Bengaluru' }
    ]);
  }

  getJobById(id: string): Observable<JobSummary | null> {
    // TODO: Fetch job details
    return of({ id, title: 'Sample Job', company: 'Example Inc', location: 'Mumbai' });
  }
}
