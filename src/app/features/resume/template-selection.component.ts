import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { ResumeStateService } from '@core/services/resume-state.service';

@Component({
  selector: 'app-template-selection',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatTabsModule],
  templateUrl: './template-selection.component.html',
  styleUrls: ['./template-selection.component.scss']
})
export class TemplateSelectionComponent {
  tabs = ['All', 'Professional', 'Modern'];
  templates = Array.from({ length: 12 }).map((_, i) => ({ id: i + 1, name: `Template ${i + 1}`, desc: 'Clean, ATS-friendly resume layout.' }));

  constructor(private router: Router, private state: ResumeStateService) {}

  useTemplate(t: { id: number }) {
    this.state.setTemplate(t.id);
    this.router.navigateByUrl('/resume/download');
  }
}
