import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-share-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './share.modal.html',
  styleUrls: ['./share.modal.scss']
})
export class ShareModalComponent {
  @Output() copy = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
}
