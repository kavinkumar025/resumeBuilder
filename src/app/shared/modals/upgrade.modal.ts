import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upgrade-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upgrade.modal.html',
  styleUrls: ['./upgrade.modal.scss']
})
export class UpgradeModalComponent {
  @Output() upgrade = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
}
