import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.modal.html',
  styleUrls: ['./feedback.modal.scss']
})
export class FeedbackModalComponent {
  @Output() submit = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
}
