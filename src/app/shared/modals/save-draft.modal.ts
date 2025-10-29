import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-save-draft-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal">
      <h2>Save Changes?</h2>
      <p>Do you want to save your edits as a draft?</p>
      <button (click)="save.emit()">Save Draft</button>
      <button (click)="cancel.emit()">Cancel</button>
    </div>
  `,
  styles: [`.modal { padding: 16px; background: #fff; border-radius: 8px; }`]
})
export class SaveDraftModalComponent {
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
}
