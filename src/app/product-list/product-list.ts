import { Component } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { ProductFilter } from '../product-filter/product-filter';

export interface ICategory {
  id: number;
  name: string;
}

@Component({
  selector: 'app-product-list',
  imports: [ProductFilter],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: IProduct[] = [
    {
      id: 1,
      name: 'Laptop',
      imgUrl:
        'https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM',
      price: 1200,
      quantity: 10,
      catId: 1,
    },
    {
      id: 2,
      name: 'Mouse',
      imgUrl: 'https://picsum.photos/200?random=2',
      price: 25,
      quantity: 0,
      catId: 1,
    },
    {
      id: 3,
      name: 'T-Shirt',
      imgUrl: 'https://picsum.photos/200?random=3',
      price: 30,
      quantity: 1,
      catId: 2,
    },
    {
      id: 4,
      name: 'Jeans',
      imgUrl: 'https://picsum.photos/200?random=4',
      price: 70,
      quantity: 25,
      catId: 2,
    },
    {
      id: 5,
      name: 'Coffee Mug',
      imgUrl: 'https://picsum.photos/200?random=5',
      price: 12,
      quantity: 0,
      catId: 3,
    },
    {
      id: 6,
      name: 'Notebook',
      imgUrl: 'https://picsum.photos/200?random=6',
      price: 8,
      quantity: 100,
      catId: 3,
    },
  ];

  categories: ICategory[] = [
    {
      id: 1,
      name: 'Electronics',
    },
    {
      id: 2,
      name: 'Clothing',
    },
    {
      id: 3,
      name: 'Stationery',
    },
  ];

  selectedCategoryId = 0;

  get filteredProducts(): IProduct[] {
    if (this.selectedCategoryId === 0) {
      return this.products;
    }

    return this.products.filter((product) => product.catId === this.selectedCategoryId);
  }

  get totalPrice(): number {
    return this.filteredProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  }

  getCategoryName(catId: number): string {
    return this.categories.find((category) => category.id === catId)?.name ?? 'Unknown';
  }

  filterByCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }
}
