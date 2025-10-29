import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  plan?: 'free' | 'premium';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user$ = new BehaviorSubject<User | null>(null);
  readonly user$ = this._user$.asObservable();

  login(email: string, password: string): Observable<User> {
    // TODO: Replace with Firebase signIn
    const user: User = { uid: 'demo', email, displayName: 'Demo User', plan: 'free' };
    this._user$.next(user);
    return of(user);
  }

  loginWithGoogle(): Observable<User> {
    // TODO: Replace with Firebase GoogleAuthProvider
    const user: User = { uid: 'google-demo', email: 'demo@example.com', displayName: 'Google User', plan: 'free' };
    this._user$.next(user);
    return of(user);
  }

  signup(email: string, password: string): Observable<User> {
    // TODO: Replace with Firebase createUser
    const user: User = { uid: 'new', email, displayName: 'New User', plan: 'free' };
    this._user$.next(user);
    return of(user);
  }

  logout(): Observable<void> {
    this._user$.next(null);
    return of(void 0);
  }
}
