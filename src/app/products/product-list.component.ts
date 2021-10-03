import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Iproducts } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector:'pm-products',//with this we can make it's template as directive and use its template using its selector = <pm-product></pm-product>
   templateUrl: './product-list.component.html',
   styleUrls: ['./product-list.component.css']
   
})
export class ProductListComponent implements OnInit, OnDestroy{

    PageTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin = 2;
    showImage: boolean = false;
    errorMessage = '';
    private _listFilter = '';
    sub!: Subscription;
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.performFilter(value);
    }
    filteredProducts: Iproducts[] = [];

    products : Iproducts[] = [];

    constructor(private productService: ProductService) {}
    
      toggleImage(): void {
        this.showImage = !this.showImage;
      }
      onRatingClicked(message : string): void{
        this.PageTitle = 'product list : ' + message;
      }
      performFilter(filterBy: string): Iproducts[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: Iproducts) =>
          product.productName.toLocaleLowerCase().includes(filterBy));
      }
      ngOnInit(): void {
       this.sub=  this.productService.getProducts().subscribe({
          next: products => {
            this.products = products;
            this.filteredProducts = this.products;
          },
          error: err => this.errorMessage = err
        });
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}