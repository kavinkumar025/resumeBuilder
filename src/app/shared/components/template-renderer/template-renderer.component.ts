import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ResumeStateService } from '@core/services/resume-state.service';
import { TemplateRenderService } from './template-renderer.service';

@Component({
  selector: 'app-template-renderer',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="render" [innerHTML]="html()"></div>`,
  styles: [`.render{width:100%; display:grid; place-items:center;}`]
})
export class TemplateRendererComponent {
  private state = inject(ResumeStateService);
  private renderer = inject(TemplateRenderService);
  private sanitizer = inject(DomSanitizer);

  html = computed<SafeHtml>(() => {
    const draft = this.state.getDraft();
    const tId = this.state.getTemplate();
    const acc = this.state.getAccentColor();
    const raw = this.renderer.renderHtml(draft, tId, acc);
    return this.sanitizer.bypassSecurityTrustHtml(raw);
  });
}
