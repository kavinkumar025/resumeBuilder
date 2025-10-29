import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  template: `
    <div class="page-center">
      <mat-card class="elevated-card">
        <div class="header">
          <h2 class="title">Welcome back</h2>
          <p class="subtitle">Sign in to continue building your AI-powered resume</p>
        </div>
        <form class="gap-16" [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
          <mat-form-field appearance="outline" class="full">
            <mat-label>Email</mat-label>
            <input matInput type="email" formControlName="email" required />
          </mat-form-field>
          <mat-form-field appearance="outline" class="full">
            <mat-label>Password</mat-label>
            <input matInput type="password" formControlName="password" required />
          </mat-form-field>
          <div class="actions">
            <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">Login</button>
            <button mat-stroked-button type="button" (click)="loginWithGoogle()">
              <span class="material-icons" style="font-size:18px;vertical-align:middle;margin-right:6px">login</span>
              Login with Google
            </button>
          </div>
        </form>
      </mat-card>
    </div>
  `,
  styles: [`
    .header { text-align: center; padding: 8px 16px 4px; }
    .title { margin: 8px 0 4px; font-weight: 700; }
    .subtitle { margin: 0 0 12px; color: #6b7280; }
    .actions { display: flex; gap: 12px; align-items: center; }
  `]
})
export class LoginComponent {
  form!: FormGroup;

  constructor(private _fb: FormBuilder, private auth: AuthService, private snack: MatSnackBar, private router: Router) {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    const { email, password } = this.form.getRawValue();
    this.auth.login(email!, password!).subscribe(() => {
      this.snack.open('Logged in', 'OK', { duration: 2000 });
      this.router.navigateByUrl('/dashboard');
    });
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle().subscribe(() => {
      this.snack.open('Logged in with Google', 'OK', { duration: 2000 });
      this.router.navigateByUrl('/dashboard');
    });
  }
}
