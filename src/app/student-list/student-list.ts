import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IStudent } from '../models/istudent';
import { StudentDetails } from '../student-details/student-details';
import { StudentEdit } from '../student-edit/student-edit';

@Component({
  selector: 'app-student-list',
  imports: [FormsModule, StudentDetails, StudentEdit],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students: IStudent[] = [
    { id: 1, name: 'Ahmed', age: 22 },
    { id: 2, name: 'Mona', age: 21 },
    { id: 3, name: 'Omar', age: 23 },
    { id: 4, name: 'Sara', age: 20 },
  ];

  selectedStudent?: IStudent;
  editingStudent?: IStudent;
  newStudent: Omit<IStudent, 'id'> = {
    name: '',
    age: 18,
  };

  addStudent(): void {
    const name = this.newStudent.name.trim();

    if (!name || this.newStudent.age <= 0) {
      return;
    }

    const nextId = Math.max(...this.students.map((student) => student.id), 0) + 1;
    this.students = [
      ...this.students,
      {
        id: nextId,
        name,
        age: this.newStudent.age,
      },
    ];

    this.newStudent = {
      name: '',
      age: 18,
    };
  }

  showDetails(student: IStudent): void {
    this.selectedStudent = student;
  }

  editStudent(student: IStudent): void {
    this.editingStudent = student;
  }

  saveStudent(updatedStudent: IStudent): void {
    this.students = this.students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student,
    );
    this.selectedStudent = updatedStudent;
    this.editingStudent = undefined;
  }

  cancelEdit(): void {
    this.editingStudent = undefined;
  }
}
