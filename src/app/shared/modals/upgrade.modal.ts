import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upgrade-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal">
      <h2>Go Premium</h2>
      <p>Unlock unlimited AI resume generation, PDF download, and analytics.</p>
      <button (click)="upgrade.emit()">Upgrade Now</button>
      <button (click)="cancel.emit()">Maybe Later</button>
    </div>
  `,
  styles: [`.modal { padding: 16px; background: #fff; border-radius: 8px; }`]
})
export class UpgradeModalComponent {
  @Output() upgrade = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
}
