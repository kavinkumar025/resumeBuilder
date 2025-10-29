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
  template: `
    <mat-card>
      <h1>Experience & Skills</h1>
      <form [formGroup]="form">
        <div formArrayName="experiences">
          <div *ngFor="let exp of experiences.controls; let i = index" [formGroupName]="i" class="block">
            <mat-form-field class="full" appearance="outline"><mat-label>Company</mat-label><input matInput formControlName="company" /></mat-form-field>
            <mat-form-field class="full" appearance="outline"><mat-label>Role</mat-label><input matInput formControlName="role" /></mat-form-field>
            <mat-form-field class="full" appearance="outline"><mat-label>Summary</mat-label><textarea matInput rows="3" formControlName="summary"></textarea></mat-form-field>
            <button mat-stroked-button color="warn" (click)="removeExperience(i)">Remove</button>
          </div>
        </div>
        <button mat-raised-button color="primary" (click)="addExperience()">Add Experience</button>

        <h3>Skills</h3>
        <div formArrayName="skills">
          <div *ngFor="let ctrl of skills.controls; let i = index" class="row">
            <mat-form-field><mat-label>Skill</mat-label><input matInput [formControlName]="i" /></mat-form-field>
            <button mat-icon-button color="warn" (click)="removeSkill(i)">x</button>
          </div>
        </div>
        <button mat-stroked-button color="primary" (click)="addSkill()">Add Skill</button>
      </form>
    </mat-card>
  `,
  styles: [`.full{width:100%;max-width:640px;display:block}.block{margin-bottom:12px}.row{display:flex;gap:8px;align-items:center}`]
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
