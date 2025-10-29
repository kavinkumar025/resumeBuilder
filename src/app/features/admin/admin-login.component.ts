import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <div class="page-center">
      <mat-card class="elevated-card">
        <h2>Admin Login</h2>
        <form [formGroup]="form" class="gap-16">
          <mat-form-field appearance="outline" class="full"><mat-label>Email</mat-label><input matInput formControlName="email" /></mat-form-field>
          <mat-form-field appearance="outline" class="full"><mat-label>Password</mat-label><input matInput type="password" formControlName="password" /></mat-form-field>
          <button mat-raised-button color="primary">Login</button>
        </form>
      </mat-card>
    </div>
  `,
  styles: [``]
})
export class AdminLoginComponent { form!: FormGroup; constructor(private fb: FormBuilder){ this.form = this.fb.group({ email: ['', [Validators.required, Validators.email]], password: ['', Validators.required] }); }}
