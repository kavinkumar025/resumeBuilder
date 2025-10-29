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
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  template: `
    <mat-card>
      <h1>Create Account</h1>
      <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Email</mat-label>
          <input matInput type="email" formControlName="email" required />
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Password</mat-label>
          <input matInput type="password" formControlName="password" required />
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Confirm Password</mat-label>
          <input matInput type="password" formControlName="confirm" required />
        </mat-form-field>
        <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">Create account</button>
      </form>
    </mat-card>
  `,
  styles: [`.full-width{width:100%;max-width:420px;display:block}`]
})
export class SignupComponent {
  form!: FormGroup;
  constructor(private _fb: FormBuilder, private auth: AuthService, private snack: MatSnackBar, private router: Router) {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    const { email, password, confirm } = this.form.getRawValue();
    if (password !== confirm) {
      this.snack.open('Passwords do not match', 'OK', { duration: 2500 });
      return;
    }
    this.auth.signup(email!, password!).subscribe(() => {
      this.snack.open('Account created', 'OK', { duration: 2000 });
      this.router.navigateByUrl('/profile/info');
    });
  }
}
