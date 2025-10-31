import { Component, ContentChildren, ElementRef, HostListener, Input, QueryList, Renderer2, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-split-pane',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './split-pane.component.html',
  styleUrls: ['./split-pane.component.scss']
})
export class SplitPaneComponent implements AfterViewInit {
  @Input() initial = 280; // initial left width in px
  @Input() minLeft = 220;
  @Input() minRight = 420;

  private dragging = false;
  leftWidth = this.initial;

  constructor(private host: ElementRef, private r2: Renderer2) {}

  ngAfterViewInit(): void {
    this.leftWidth = this.initial;
  }

  startDrag(evt: MouseEvent) {
    evt.preventDefault();
    this.dragging = true;
    this.r2.addClass(document.body, 'resizing');
  }

  @HostListener('window:mousemove', ['$event'])
  onMove(evt: MouseEvent) {
    if (!this.dragging) return;
    const rect = (this.host.nativeElement as HTMLElement).getBoundingClientRect();
    let next = evt.clientX - rect.left;
    const maxLeft = rect.width - this.minRight;
    next = Math.max(this.minLeft, Math.min(maxLeft, next));
    this.leftWidth = next;
  }

  @HostListener('window:mouseup')
  endDrag() {
    if (!this.dragging) return;
    this.dragging = false;
    this.r2.removeClass(document.body, 'resizing');
  }
}
