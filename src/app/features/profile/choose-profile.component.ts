import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-choose-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './choose-profile.component.html',
  styleUrls: ['./choose-profile.component.scss']
})
export class ChooseProfileComponent {
  profiles = [
    { id: 1, name: 'Kavinkumar M', email: 'kavinkumar025@gmail.com', avatar: 'https://via.placeholder.com/64' }
  ];
}
