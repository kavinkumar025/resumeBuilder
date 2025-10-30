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
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
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
