import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-info-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  template: `
    <mat-card>
      <h1>Profile</h1>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <mat-form-field class="full" appearance="outline"><mat-label>Name</mat-label><input matInput formControlName="name" /></mat-form-field>
        <mat-form-field class="full" appearance="outline"><mat-label>Phone</mat-label><input matInput formControlName="phone" /></mat-form-field>
        <mat-form-field class="full" appearance="outline"><mat-label>Location</mat-label><input matInput formControlName="location" /></mat-form-field>
        <mat-form-field class="full" appearance="outline"><mat-label>Summary</mat-label><textarea matInput rows="4" formControlName="summary"></textarea></mat-form-field>
        <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">Save</button>
      </form>
    </mat-card>
  `,
  styles: [`.full{width:100%;max-width:640px;display:block}`]
})
export class UserInfoFormComponent {
  form!: FormGroup;
  constructor(private _fb: FormBuilder, private user: UserService, private snack: MatSnackBar) {
    this.form = this._fb.group({
      name: ['', Validators.required],
      phone: [''],
      location: [''],
      summary: [''],
    });
  }
  onSubmit(){
    if (this.form.invalid) return;
    this.user.updateProfile('demo', this.form.value).subscribe(() => this.snack.open('Profile saved', 'OK', { duration: 2000 }));
  }
}
