import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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
import { AppFooterComponent } from './shared/components/app-footer/app-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, AsyncPipe, NgIf, AppFooterComponent],
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
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
