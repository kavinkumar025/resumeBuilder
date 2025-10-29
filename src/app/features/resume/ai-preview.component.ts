import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ResumeStateService } from '../../core/services/resume-state.service';

@Component({
  selector: 'app-ai-preview',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card>
      <h1>AI Resume Preview</h1>
      <pre style="white-space:pre-wrap">{{ content }}</pre>
      <div>
        <button mat-stroked-button color="primary" (click)="edit()">Edit</button>
        <button mat-raised-button color="accent" (click)="download()">Download PDF</button>
      </div>
    </mat-card>
  `
})
export class AiPreviewComponent {
  content = '';
  constructor(private state: ResumeStateService, private router: Router) {
    this.content = this.state.getContent();
  }
  edit(){ this.router.navigateByUrl('/resume/editor'); }
  async download(){
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    const text = this.content || 'No content';
    const split = doc.splitTextToSize(text, 180);
    doc.text(split, 10, 10);
    doc.save('resume.pdf');
  }
}
