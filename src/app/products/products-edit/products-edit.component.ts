import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/products.services';
import { ProductTypeService } from '../../services/productType.services';
import { ProductType } from '../../model/Products.model';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit{
  product: any = {};
  productTypes: ProductType[] = [];
  constructor(
    private productTypeService: ProductTypeService,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.productService.getById(id).subscribe((data) => {
      this.product = data;
    });
    this.loadProductTypes();
  }
  
  updateProduct(): void {
    this.productService.update(this.product.productID, {idProductType:this.product.productType, productName:this.product.productName}).subscribe(() => {
      this.router.navigate(['/index.html']);
      console.log({idProductType:this.product.productType, productName:this.product.productName})
    });
  }

  loadProductTypes(): void {
    this.productTypeService.getAll().subscribe((data) => {
      this.productTypes = data;
    });
  } 
}
