import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-save-draft-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './save-draft.modal.html',
  styleUrls: ['./save-draft.modal.scss']
})
export class SaveDraftModalComponent {
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
}
