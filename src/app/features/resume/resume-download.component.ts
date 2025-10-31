import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TemplatePreviewComponent } from '@shared/components/template-preview/template-preview.component';
import { TemplateRenderService } from '@shared/components/template-renderer/template-renderer.service';
import { ResumeStateService } from '../../core/services/resume-state.service';
import { ExportService } from '@core/services/export.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resume-download',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule, TemplatePreviewComponent],
  templateUrl: './resume-download.component.html',
  styleUrls: ['./resume-download.component.scss']
})
export class ResumeDownloadComponent {
  palette = ['#000000','#ef4444','#ec4899','#8b5cf6','#3b82f6','#38bdf8','#22c55e','#0ea5e9','#059669'];
  accent = '#2563eb';

  constructor(private state: ResumeStateService, private exporter: ExportService, private renderer: TemplateRenderService) {
    this.accent = this.state.getAccentColor();
  }

  pickColor(c: string){
    this.state.setAccentColor(c);
    this.accent = c;
  }
  async download(){
    const draft = this.state.getDraft();
    const html = this.renderer.renderHtml(draft, this.state.getTemplate(), this.accent);
    try {
      const blob = await this.exporter.exportPdf(html);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'resume.pdf'; a.click();
      URL.revokeObjectURL(url);
    } catch {
      // Fallback to client-side jsPDF
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF();
      const split = doc.splitTextToSize((this.state.getContent() || ''), 180);
      doc.text(split, 10, 10);
      doc.save('resume.pdf');
    }
  }
}
