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
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.scss']
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
