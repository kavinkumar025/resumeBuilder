import { Component, computed, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ResumeStateService } from '../../core/services/resume-state.service';
import { AtsService } from '../../core/services/ats.service';

@Component({
  selector: 'app-ats-check',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './ats-check.component.html',
  styleUrls: ['./ats-check.component.scss']
})
export class AtsCheckComponent {
  private state = inject(ResumeStateService);
  private ats = inject(AtsService);

  content = signal(this.state.getContent());
  jd = signal(this.state.getJobDescription());

  constructor(){
    // Keep signals in sync with service state on initial load; in a real app we'd subscribe to observables
    // or convert service subjects to signals.
  }

  result = computed(() => this.ats.check(this.content() || '', this.jd() || ''));
  score = computed(() => this.result().score);
  warnings = computed(() => this.result().warnings);
}
