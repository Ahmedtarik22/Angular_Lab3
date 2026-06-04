import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../product-list/product-list';

@Component({
  selector: 'app-product-filter',
  imports: [FormsModule],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter {
  @Input() categories: ICategory[] = [];
  @Input() totalPrice = 0;
  @Output() categorySelected = new EventEmitter<number>();

  selectedCategoryId = 0;

  onCategoryChange(): void {
    this.categorySelected.emit(Number(this.selectedCategoryId));
  }
}
