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

  // Job description (for tailoring/ATS)
  private _jobDescription$ = new BehaviorSubject<string>('');
  readonly jobDescription$ = this._jobDescription$.asObservable();
  setJobDescription(text: string) { this._jobDescription$.next(text); }
  getJobDescription() { return this._jobDescription$.value; }

  // Profile section toggles
  private _sections$ = new BehaviorSubject<Record<string, boolean>>({
    summary: true,
    experience: true,
    education: true,
    skills: true,
    projects: true,
    certifications: false,
    languages: true,
    achievements: false,
    interests: false
  });
  readonly sections$ = this._sections$.asObservable();
  toggleSection(key: string, enabled: boolean) {
    const next = { ...this._sections$.value, [key]: enabled };
    this._sections$.next(next);
  }
  getSections() { return this._sections$.value; }

  // Sections order (for left navigation / rendering order)
  private _sectionsOrder$ = new BehaviorSubject<string[]>([
    'summary','experience','education','skills','projects','certifications','languages','achievements','interests'
  ]);
  readonly sectionsOrder$ = this._sectionsOrder$.asObservable();
  getSectionsOrder() { return this._sectionsOrder$.value; }
  setSectionsOrder(order: string[]) { this._sectionsOrder$.next(order); }

  // Minimal draft for renderer/export (not persisted)
  private _draft$ = new BehaviorSubject<any>({
    id: Math.random().toString(36).slice(2),
    title: '',
    summary: '',
    experience: [],
    education: [],
    skills: [],
    certifications: [],
    projects: []
  });
  readonly draft$ = this._draft$.asObservable();
  setDraft(partial: any){
    const curr = this._draft$.value || {};
    this._draft$.next({ ...curr, ...partial });
  }
  getDraft(){ return this._draft$.value; }
}
