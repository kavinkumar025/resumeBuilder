import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResumeStateService {
  private _content$ = new BehaviorSubject<string>('');
  readonly content$ = this._content$.asObservable();
  setContent(text: string) { this._content$.next(text); }
  getContent() { return this._content$.value; }
}
