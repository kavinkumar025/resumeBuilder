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
  template: `
    <section class="hero">
      <div class="hero__content">
        <h1>Build ATS‑friendly resumes in minutes</h1>
        <p class="sub">AI resume builder, cover letters, and job tracking — all in one place.</p>
        <div class="cta">
          <a mat-raised-button color="primary" routerLink="/resume/input">Create Resume</a>
          <a mat-stroked-button routerLink="/pricing">View Pricing</a>
        </div>
      </div>
    </section>

    <section class="features">
      <mat-card class="feature" *ngFor="let f of featureCards">
        <mat-icon>{{ f.icon }}</mat-icon>
        <h3>{{ f.title }}</h3>
        <p>{{ f.desc }}</p>
      </mat-card>
    </section>

    <section class="pricing-teaser">
      <mat-card class="plan">
        <h3>Free</h3>
        <p>Basic template • PDF export</p>
        <div class="price">₹0</div>
        <button mat-stroked-button routerLink="/pricing">Get Started</button>
      </mat-card>
      <mat-card class="plan popular" appearance="outlined">
        <div class="badge">Popular</div>
        <h3>Premium</h3>
        <p>All templates • AI cover letters • Job match</p>
        <div class="price">₹499/yr</div>
        <button mat-raised-button color="primary" routerLink="/pricing">Upgrade</button>
      </mat-card>
    </section>

    <section class="footer">
      <a routerLink="/help">Help</a>
      <span>•</span>
      <a href="#" target="_blank">Terms</a>
      <span>•</span>
      <a href="#" target="_blank">Privacy</a>
    </section>
  `,
  styles: [`
    .hero { padding: 56px 24px; text-align: center; background: radial-gradient(60% 60% at 50% 30%, #eef2ff 0%, #ffffff 60%); }
    .hero__content { max-width: 900px; margin: 0 auto; }
    h1 { font-size: clamp(28px, 4vw, 44px); margin: 0 0 8px; }
    .sub { color: #6b7280; margin: 0 0 16px; }
    .cta { display: inline-flex; gap: 12px; }
    .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); gap: 16px; padding: 32px 24px; }
    .feature { text-align: left; display: grid; gap: 6px; }
    .feature mat-icon { color: var(--md-sys-color-primary); }
    .pricing-teaser { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); gap: 16px; padding: 8px 24px 40px; max-width: 900px; margin: 0 auto; }
    .plan { position: relative; text-align: center; padding-bottom: 16px; }
    .plan .price { font-size: 24px; font-weight: 700; margin: 8px 0 12px; }
    .popular { outline: 2px solid rgba(99,102,241,0.35); }
    .badge { position: absolute; right: 12px; top: 12px; background: #eef2ff; color: #3730a3; padding: 2px 8px; border-radius: 999px; font-size: 12px; }
    .footer { display: flex; gap: 8px; justify-content: center; padding: 24px; color: #6b7280; }
  `]
})
export class LandingComponent {
  featureCards = [
    { icon: 'article', title: 'ATS‑friendly', desc: 'Clean, scannable templates that pass ATS checks.' },
    { icon: 'auto_awesome', title: 'AI‑assisted', desc: 'Polished summaries, keywords, and bullet points.' },
    { icon: 'work', title: 'Job match', desc: 'Find opportunities aligned to your profile.' },
    { icon: 'timeline', title: 'Track progress', desc: 'Stay on top of applications and interviews.' }
  ];
}
