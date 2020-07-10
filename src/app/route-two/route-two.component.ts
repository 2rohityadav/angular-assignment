import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.css'],
  providers: [ProductService],
})
export class RouteTwoComponent implements OnInit {

  products: any[] = [];
  displayMode: string = 'grid';

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this.products = this._productService.getProducts();

    this.products = this.products.sort((low, high) => low.price - high.price);
  }

  sort(event: any) {
    switch (event.target.value) {
      case 'Low': {
        this.products = this.products.sort(
          (low, high) => low.price - high.price
        );
        break;
      }

      case 'High': {
        this.products = this.products.sort(
          (low, high) => high.price - low.price
        );
        break;
      }

      default: {
        this.products = this.products.sort(
          (low, high) => low.price - high.price
        );
        break;
      }
    }
    return this.products;
  }

  onDisplayModeChange(mode: string): void {
    this.displayMode = mode;
  }
}
