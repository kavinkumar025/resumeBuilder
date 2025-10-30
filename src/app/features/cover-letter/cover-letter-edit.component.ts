import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cover-letter-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './cover-letter-edit.component.html',
  styleUrls: ['./cover-letter-edit.component.scss']
})
export class CoverLetterEditComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) { this.form = this.fb.group({ body: ['Dear Hiring Manager, ...'] }); }
}
