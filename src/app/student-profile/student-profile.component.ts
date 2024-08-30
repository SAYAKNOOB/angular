import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
  student ={
    name: 'Jyotika Vaishnavi',
    age: 22,
    grade: '12th',
    email:'jyotikavartika123@gmail.com'
    };
}
