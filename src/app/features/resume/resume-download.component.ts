import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ResumeStateService } from '../../core/services/resume-state.service';

@Component({
  selector: 'app-resume-download',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card>
      <h1>Download Resume</h1>
      <button mat-raised-button color="primary" (click)="download()">Download PDF</button>
    </mat-card>
  `
})
export class ResumeDownloadComponent {
  constructor(private state: ResumeStateService) {}
  async download(){
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    const text = this.state.getContent() || 'No content';
    const split = doc.splitTextToSize(text, 180);
    doc.text(split, 10, 10);
    doc.save('resume.pdf');
  }
}
