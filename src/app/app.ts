import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { AsyncPipe, NgIf } from '@angular/common';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, AsyncPipe, NgIf],
  styles: [`
    :host { display: block; height: 100vh; }
    .app-container { height: 100%; background: var(--bg); }
    .content { padding: 16px; }
    .spacer { flex: 1 1 auto; }
    a { text-decoration: none; color: inherit; }
    .brand { font-weight: 700; letter-spacing: .2px; }
    .sidebar-header { padding: 16px; font-weight: 700; }
  `],
  template: `
    <mat-sidenav-container class="app-container">
      <mat-sidenav #sidenav
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="!(isHandset$ | async)"
      >
        <div class="sidebar-header">Menu</div>
        <mat-nav-list>
          <a mat-list-item routerLink="/dashboard" (click)="closeIfHandset(sidenav)">Dashboard</a>
          <a mat-list-item routerLink="/resume/input" (click)="closeIfHandset(sidenav)">Resume</a>
          <a mat-list-item routerLink="/jobs/search" (click)="closeIfHandset(sidenav)">Jobs</a>
          <a mat-list-item routerLink="/pricing" (click)="closeIfHandset(sidenav)">Pricing</a>
          <a mat-list-item routerLink="/cover-letter/generate" (click)="closeIfHandset(sidenav)">Cover Letter</a>
          <a mat-list-item routerLink="/profile/info" (click)="closeIfHandset(sidenav)">Profile</a>
          <a mat-list-item routerLink="/admin/login" (click)="closeIfHandset(sidenav)">Admin</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button mat-icon-button aria-label="Open menu" (click)="sidenav.toggle()" *ngIf="(isHandset$ | async)">
            <mat-icon>menu</mat-icon>
          </button>
          <span class="brand">AI Resume Builder</span>
          <span class="spacer"></span>
          <button mat-icon-button aria-label="Toggle theme" (click)="toggleTheme()">
            <mat-icon>{{ (theme.theme$ | async) === 'dark' ? 'dark_mode' : 'light_mode' }}</mat-icon>
          </button>
          <a mat-button routerLink="/login">Login</a>
        </mat-toolbar>
        <div class="content container">
          <router-outlet />
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class App {
  readonly isHandset$;
  private _isHandset = false;

  constructor(
    private readonly breakpoint: BreakpointObserver,
    readonly theme: ThemeService,
  ) {
    this.isHandset$ = this.breakpoint.observe([Breakpoints.XSmall, Breakpoints.Small, '(max-width: 959px)'])
      .pipe(map(result => result.matches), shareReplay(1));
    // Keep a boolean snapshot for event handlers
    this.isHandset$.subscribe(v => this._isHandset = v);
  }

  toggleTheme() {
    this.theme.toggle();
  }

  closeIfHandset(sidenav: MatSidenav) {
    if (this._isHandset) sidenav.close();
  }
}
