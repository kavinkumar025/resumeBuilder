import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-reorder-headings',
  standalone: true,
  imports: [CommonModule, DragDropModule, MatCardModule],
  templateUrl: './reorder-headings.component.html',
  styleUrls: ['./reorder-headings.component.scss']
})
export class ReorderHeadingsComponent {
  headings = ['Personal Details','Education','Experience','Skills','Objective','Reference','Interests','Projects','Languages','Achievements & Awards'];
  drop(e: CdkDragDrop<string[]>) { moveItemInArray(this.headings, e.previousIndex, e.currentIndex); }
}
