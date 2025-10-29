import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule],
  styles: [`
    :host { display: block; height: 100vh; }
    .app-container { height: 100%; }
    .content { padding: 16px; }
    .spacer { flex: 1 1 auto; }
    a { text-decoration: none; color: inherit; }
  `],
  template: `
    <mat-sidenav-container class="app-container">
      <mat-sidenav mode="side" opened>
        <mat-nav-list>
          <a mat-list-item routerLink="/dashboard">Dashboard</a>
          <a mat-list-item routerLink="/resume/input">Resume</a>
          <a mat-list-item routerLink="/jobs/search">Jobs</a>
          <a mat-list-item routerLink="/pricing">Pricing</a>
          <a mat-list-item routerLink="/cover-letter/generate">Cover Letter</a>
          <a mat-list-item routerLink="/profile/info">Profile</a>
          <a mat-list-item routerLink="/admin/login">Admin</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <span>AI Resume Builder</span>
          <span class="spacer"></span>
          <a mat-button routerLink="/login">Login</a>
        </mat-toolbar>
        <div class="content">
          <router-outlet />
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class App {}
