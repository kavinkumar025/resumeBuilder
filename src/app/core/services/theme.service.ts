import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'rb.theme';
  private readonly doc = inject(DOCUMENT);

  readonly theme$ = new BehaviorSubject<Theme>(this.initialTheme());

  constructor() {
    // Apply initial attribute
    this.apply(this.theme$.value);
  }

  toggle() {
    const next: Theme = this.theme$.value === 'dark' ? 'light' : 'dark';
    this.set(next);
  }

  set(theme: Theme) {
    this.theme$.next(theme);
    this.apply(theme);
    try { localStorage.setItem(this.storageKey, theme); } catch {}
  }

  private initialTheme(): Theme {
    try {
      const saved = localStorage.getItem(this.storageKey) as Theme | null;
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {}
    const prefersDark = this.doc.defaultView?.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  private apply(theme: Theme) {
    const root = this.doc.documentElement;
    root.setAttribute('data-theme', theme);
  }
}
