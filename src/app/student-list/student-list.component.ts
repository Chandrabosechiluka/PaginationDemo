import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
  totalCount: number = 0;
  pageNumber: number = 1;
  pageSize: number = 10;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents(this.pageNumber, this.pageSize).subscribe(
      (data) => {
        console.log('Received data:', data);  // This will show if data is received
        this.students = data.students;
        this.totalCount = data.totalCount;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }
  

  nextPage(): void {
    if ((this.pageNumber * this.pageSize) < this.totalCount) {
      this.pageNumber++;
      this.loadStudents();
    }
  }

  prevPage(): void {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.loadStudents();
    }
  }
}
