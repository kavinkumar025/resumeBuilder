import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AiService {
  constructor(private http: HttpClient) {}
  generateResume(prompt: string): Observable<string> {
    // TODO: Call OpenAI / Cloud Function
    return of('Generated resume content (placeholder).');
  }

  generateCoverLetter(jobTitle: string, company: string): Observable<string> {
    // TODO: Call OpenAI / Cloud Function
    return of('Generated cover letter content (placeholder).');
  }

  improveText(text: string, tone: 'professional'|'friendly'|'formal'|'bold' = 'professional'): Observable<string> {
    return this.http.post<{text:string}>('/api/ai/improve', { text, tone }).pipe(
      catchError(() => of({ text: `Improved: ${text}` })),
    ).pipe((src: any) => of(src.text));
  }

  quantifyText(text: string): Observable<string> {
    return this.http.post<{text:string}>('/api/ai/quantify', { text }).pipe(
      catchError(() => of({ text: `${text} (quantified with metrics)` })),
    ).pipe((src: any) => of(src.text));
  }

  tailorToJob(text: string, jobDescription: string, tone: 'professional'|'friendly'|'formal'|'bold' = 'professional'): Observable<string> {
    return this.http.post<{text:string}>('/api/ai/tailor', { text, jobDescription, tone }).pipe(
      catchError(() => {
        const jdWords = (jobDescription || '').split(/\s+/).slice(0, 5).join(' ');
        return of({ text: `${text}\n\nTailored for: ${jdWords}` });
      }),
    ).pipe((src: any) => of(src.text));
  }
}
