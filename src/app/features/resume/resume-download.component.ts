import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ResumeStateService } from '../../core/services/resume-state.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resume-download',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './resume-download.component.html',
  styleUrls: ['./resume-download.component.scss']
})
export class ResumeDownloadComponent {
  palette = ['#000000','#ef4444','#ec4899','#8b5cf6','#3b82f6','#38bdf8','#22c55e','#0ea5e9','#059669'];
  accent = '#2563eb';

  constructor(private state: ResumeStateService) {
    this.accent = this.state.getAccentColor();
  }

  pickColor(c: string){
    this.state.setAccentColor(c);
    this.accent = c;
  }
  async download(){
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    const text = this.state.getContent() || 'No content';
    const split = doc.splitTextToSize(text, 180);
    doc.text(split, 10, 10);
    doc.save('resume.pdf');
  }
}
