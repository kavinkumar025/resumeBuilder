import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  template: `
    <mat-card>
      <h1>Reset Password</h1>
      <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Email</mat-label>
          <input matInput type="email" formControlName="email" required />
        </mat-form-field>
        <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">Send reset link</button>
      </form>
    </mat-card>
  `,
  styles: [`.full-width{width:100%;max-width:420px;display:block}`]
})
export class ForgotPasswordComponent {
  form!: FormGroup;
  constructor(private _fb: FormBuilder, private snack: MatSnackBar) {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.snack.open('Password reset email sent (placeholder)', 'OK', { duration: 2500 });
  }
}
