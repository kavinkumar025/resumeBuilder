import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-share-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal">
      <h2>Share Resume</h2>
      <p>Copy the public resume link and share it.</p>
      <button (click)="copy.emit()">Copy Link</button>
      <button (click)="close.emit()">Close</button>
    </div>
  `,
  styles: [`.modal { padding: 16px; background: #fff; border-radius: 8px; }`]
})
export class ShareModalComponent {
  @Output() copy = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
}
