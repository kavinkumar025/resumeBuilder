import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeStateService } from '@core/services/resume-state.service';

@Component({
  selector: 'app-template-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.scss']
})
export class TemplatePreviewComponent {
  @Input() templateId!: number | string;
  @Input() compact = false;
  private state = inject(ResumeStateService);
  get accent() { return this.state.getAccentColor(); }
  get lines() {
    const text = (this.state.getContent() || '').split(/\n+/).filter(Boolean);
    return text.slice(0, 3);
  }
}
