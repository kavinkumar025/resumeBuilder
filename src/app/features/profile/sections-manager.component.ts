import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ResumeStateService } from '@core/services/resume-state.service';

@Component({
  selector: 'app-sections-manager',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSlideToggleModule],
  templateUrl: './sections-manager.component.html',
  styleUrls: ['./sections-manager.component.scss']
})
export class SectionsManagerComponent {
  sections: Record<string, boolean> = {};
  keys: string[] = [];
  constructor(private state: ResumeStateService){
    this.sections = this.state.getSections();
    this.keys = Object.keys(this.sections);
  }
  toggle(k: string, v: boolean){ this.state.toggleSection(k, v); this.sections = this.state.getSections(); }
}
