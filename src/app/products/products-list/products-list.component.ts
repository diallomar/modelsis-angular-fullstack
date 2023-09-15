import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.services';
import { InfoProduct, Product } from '../../model/Products.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
    });
  }

  updateProduct(id: number, product: InfoProduct): void {
    this.productService.update(id, product).subscribe(() => {
      this.loadProducts();
    });
  }
  deleteProduct(id:number): void{
     this.productService.delete(id).subscribe(()=>{
      this.loadProducts();
     })
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
