import { Component } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { StudentList } from './student-list/student-list';
import { UiDemo } from './ui-demo/ui-demo';

@Component({
  selector: 'app-root',
  imports: [StudentList, ProductList, UiDemo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
