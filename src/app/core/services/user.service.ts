import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface UserProfile {
  name: string;
  phone?: string;
  location?: string;
  summary?: string;
  skills?: string[];
}

@Injectable({ providedIn: 'root' })
export class UserService {
  getProfile(uid: string): Observable<UserProfile | null> {
    // TODO: Fetch from Firestore
    return of(null);
  }

  updateProfile(uid: string, profile: Partial<UserProfile>): Observable<void> {
    // TODO: Save to Firestore
    return of(void 0);
  }
}
