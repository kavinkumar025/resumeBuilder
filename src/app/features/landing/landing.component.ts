import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatCardModule, MatIconModule, MatDividerModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  featureCards = [
    { icon: 'article', title: 'ATS‑friendly', desc: 'Clean, scannable templates that pass ATS checks.' },
    { icon: 'auto_awesome', title: 'AI‑assisted', desc: 'Polished summaries, keywords, and bullet points.' },
    { icon: 'work', title: 'Job match', desc: 'Find opportunities aligned to your profile.' },
    { icon: 'timeline', title: 'Track progress', desc: 'Stay on top of applications and interviews.' }
  ];
}
