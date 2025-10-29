import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal">
      <h2>We'd love your feedback</h2>
      <p>Tell us what worked well and what can improve.</p>
      <button (click)="submit.emit()">Submit</button>
      <button (click)="close.emit()">Close</button>
    </div>
  `,
  styles: [`.modal { padding: 16px; background: #fff; border-radius: 8px; }`]
})
export class FeedbackModalComponent {
  @Output() submit = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
}
