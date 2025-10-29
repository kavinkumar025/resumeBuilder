import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-delete-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete this item?</p>
      <button (click)="confirm.emit()">Delete</button>
      <button (click)="cancel.emit()">Cancel</button>
    </div>
  `,
  styles: [`.modal { padding: 16px; background: #fff; border-radius: 8px; }`]
})
export class ConfirmDeleteModalComponent {
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
}
