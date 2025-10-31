import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatePreviewComponent } from '../template-preview/template-preview.component';
import { ResumeStateService } from '@core/services/resume-state.service';

@Component({
  selector: 'app-template-mini-picker',
  standalone: true,
  imports: [CommonModule, TemplatePreviewComponent],
  templateUrl: './template-mini-picker.component.html',
  styleUrls: ['./template-mini-picker.component.scss']
})
export class TemplateMiniPickerComponent {
  private state = inject(ResumeStateService);
  templates = Array.from({ length: 12 }).map((_, i) => ({ id: i + 1, name: `T${i + 1}` }));
  selected = this.state.getTemplate();

  pick(id: number){
    this.state.setTemplate(id);
    this.selected = id;
  }
}
