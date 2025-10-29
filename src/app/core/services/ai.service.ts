import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AiService {
  generateResume(prompt: string): Observable<string> {
    // TODO: Call OpenAI / Cloud Function
    return of('Generated resume content (placeholder).');
  }

  generateCoverLetter(jobTitle: string, company: string): Observable<string> {
    // TODO: Call OpenAI / Cloud Function
    return of('Generated cover letter content (placeholder).');
  }
}
