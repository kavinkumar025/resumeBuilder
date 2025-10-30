import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AiService } from '../../core/services/ai.service';
import { ResumeStateService } from '../../core/services/resume-state.service';

@Component({
  selector: 'app-ai-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './ai-input.component.html',
  styleUrls: ['./ai-input.component.scss']
})
export class AiInputComponent {
  form!: FormGroup;
  constructor(private _fb: FormBuilder, private ai: AiService, private state: ResumeStateService, private router: Router){
    this.form = this._fb.group({ role: ['', Validators.required], summary: ['', Validators.required] });
  }
  generate(){
    if(this.form.invalid) return;
    const { role, summary } = this.form.getRawValue();
    const prompt = `Create a resume for a ${role}: ${summary}`;
    this.ai.generateResume(prompt).subscribe(text => {
      this.state.setContent(text);
      this.router.navigateByUrl('/resume/preview');
    });
  }
}
