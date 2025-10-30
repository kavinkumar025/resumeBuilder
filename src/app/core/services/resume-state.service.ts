import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResumeStateService {
  private _content$ = new BehaviorSubject<string>('');
  readonly content$ = this._content$.asObservable();
  setContent(text: string) { this._content$.next(text); }
  getContent() { return this._content$.value; }

  // Template selection
  private _selectedTemplateId$ = new BehaviorSubject<number | null>(null);
  readonly selectedTemplateId$ = this._selectedTemplateId$.asObservable();
  setTemplate(id: number) { this._selectedTemplateId$.next(id); }
  getTemplate() { return this._selectedTemplateId$.value; }

  // Accent color (hex string)
  private _accentColor$ = new BehaviorSubject<string>('#2563eb');
  readonly accentColor$ = this._accentColor$.asObservable();
  setAccentColor(hex: string) { this._accentColor$.next(hex); }
  getAccentColor() { return this._accentColor$.value; }

  // Profile section toggles
  private _sections$ = new BehaviorSubject<Record<string, boolean>>({
    interests: true,
    achievements: true,
    activities: true,
    publications: true,
    languages: true,
    additionalInfo: false,
    projects: true,
    reference: true,
    signature: false,
    coverLetter: true
  });
  readonly sections$ = this._sections$.asObservable();
  toggleSection(key: string, enabled: boolean) {
    const next = { ...this._sections$.value, [key]: enabled };
    this._sections$.next(next);
  }
  getSections() { return this._sections$.value; }
}
