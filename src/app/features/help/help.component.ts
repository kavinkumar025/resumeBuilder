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
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
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
