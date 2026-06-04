import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IStudent } from '../models/istudent';

@Component({
  selector: 'app-student-edit',
  imports: [FormsModule],
  templateUrl: './student-edit.html',
  styleUrl: './student-edit.css',
})
export class StudentEdit implements OnChanges {
  @Input() student?: IStudent;
  @Output() studentUpdated = new EventEmitter<IStudent>();
  @Output() editCancelled = new EventEmitter<void>();

  editedStudent?: IStudent;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['student']) {
      this.editedStudent = this.student ? { ...this.student } : undefined;
    }
  }

  save(): void {
    if (!this.editedStudent || !this.editedStudent.name.trim() || this.editedStudent.age <= 0) {
      return;
    }

    this.studentUpdated.emit({
      ...this.editedStudent,
      name: this.editedStudent.name.trim(),
    });
  }

  cancel(): void {
    this.editCancelled.emit();
  }
}
