import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-job-tracker',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSelectModule, MatButtonModule],
  templateUrl: './job-tracker.component.html',
  styleUrls: ['./job-tracker.component.scss']
})
export class JobTrackerComponent {
  displayed = ['title','company','status','actions'];
  rows = [
    { title: 'Frontend Engineer', company: 'Acme', status: 'applied' },
    { title: 'UI Developer', company: 'Globex', status: 'interview' }
  ];
}
