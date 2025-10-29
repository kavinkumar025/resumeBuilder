import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule],
  template: `
    <div class="page-center">
      <mat-card class="elevated-card">
        <h2>Help & Support</h2>
        <p>Check the FAQs or send us a message. We usually reply within 24 hours.</p>

        <mat-accordion class="faq">
          <mat-expansion-panel *ngFor="let q of faqs">
            <mat-expansion-panel-header>
              <span>{{ q.q }}</span>
            </mat-expansion-panel-header>
            <p>{{ q.a }}</p>
          </mat-expansion-panel>
        </mat-accordion>

        <form [formGroup]="form" class="gap-16" (ngSubmit)="submit()">
          <mat-form-field appearance="outline" class="full">
            <mat-label>Your email</mat-label>
            <input matInput type="email" formControlName="email" required />
          </mat-form-field>
          <mat-form-field appearance="outline" class="full">
            <mat-label>Message</mat-label>
            <textarea matInput rows="4" formControlName="message" required></textarea>
          </mat-form-field>
          <button mat-raised-button color="primary" [disabled]="form.invalid">Send</button>
        </form>
      </mat-card>
    </div>
  `,
  styles: [`.faq{margin:12px 0}`]
})
export class HelpComponent {
  form!: FormGroup;
  faqs = [
    { q: 'How do I export my resume?', a: 'Go to Resume Preview → Download. A PDF will be generated for you.' },
    { q: 'How to upgrade?', a: 'Open Pricing and choose Premium; you will be redirected to a secure checkout.' },
    { q: 'Is my data secure?', a: 'We store your data securely and never share it with third parties.' }
  ];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  submit() { if (this.form.invalid) return; /* TODO: Firestore create */ this.form.reset(); }
}
