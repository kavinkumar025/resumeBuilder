import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatButtonModule],
  template: `
    <section class="page dashboard">
      <h2>Settings</h2>
      <mat-tab-group>
        <mat-tab label="Profile">
          <form [formGroup]="profile" class="grid">
            <mat-form-field appearance="outline" class="full"><mat-label>Name</mat-label><input matInput formControlName="name" /></mat-form-field>
            <mat-form-field appearance="outline" class="full"><mat-label>Email</mat-label><input matInput formControlName="email" /></mat-form-field>
            <button mat-raised-button color="primary">Save</button>
          </form>
        </mat-tab>
        <mat-tab label="Security">
          <form [formGroup]="security" class="grid">
            <mat-form-field appearance="outline" class="full"><mat-label>New password</mat-label><input matInput type="password" formControlName="password" /></mat-form-field>
            <button mat-stroked-button>Change Password</button>
          </form>
        </mat-tab>
        <mat-tab label="Preferences">
          <mat-slide-toggle>Dark mode</mat-slide-toggle>
        </mat-tab>
      </mat-tab-group>
    </section>
  `,
  styles: [`.page{padding:24px}.grid{display:grid;gap:12px}.full{width:100%}`]
})
export class SettingsComponent {
  profile!: FormGroup; security!: FormGroup;
  constructor(private fb: FormBuilder){
    this.profile = this.fb.group({ name: [''], email: [''] });
    this.security = this.fb.group({ password: [''] });
  }
}
