import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-experience-skills',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './experience-skills.component.html',
  styleUrls: ['./experience-skills.component.scss']
})
export class ExperienceSkillsComponent {
  form!: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      experiences: this._fb.array([]),
      skills: this._fb.array([])
    });
  }

  get experiences() { return this.form.get('experiences') as FormArray; }
  get skills() { return this.form.get('skills') as FormArray; }

  addExperience() {
    this.experiences.push(this._fb.group({ company: [''], role: [''], summary: [''] }));
  }
  removeExperience(i: number) { this.experiences.removeAt(i); }

  addSkill() { this.skills.push(this._fb.control('')); }
  removeSkill(i: number) { this.skills.removeAt(i); }
}
