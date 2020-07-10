import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
// import { OrderbyPipe } from '../pipes/sort.pipe';

@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.css'],
  providers: [StudentService],
})
export class RouteFiveComponent implements OnInit {
  studentDetails: any[] = [];
  headerDetails = ['ID', 'Name', 'Course', 'Marks'];
  studentList: any[];
  isIt: boolean;

  constructor(private _studentService: StudentService) {
    this.isIt = true
  }

  ngOnInit() {
    this.studentDetails = this._studentService.getStudentDetails()
  }

  sort(colName) {
    this.studentDetails.sort((a, b) =>
      a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0
    );
  }

  ascending() {
    this.isIt = false
    const copy = [...this.studentDetails]
    this.studentList = copy.sort((a, b) => a['ID'] > b['ID'] ? 1 : -1);
  }

  descending() {
    this.isIt = false
    const copy = [...this.studentDetails]
    this.studentList = copy.sort((a, b) => a['ID'] < b['ID'] ? 1 : -1);
  }

  reset(){
    this.isIt = true
  }

}
