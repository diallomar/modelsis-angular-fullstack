import { Component } from '@angular/core';
import { ProductService } from '../../services/products.services';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductType } from '../../model/Products.model';
import { ProductTypeService } from '../../services/productType.services';
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent {
  product: any = {};
  productTypes: ProductType[] = [];

  constructor(private productService: ProductService, 
    private productTypeService: ProductTypeService,
    private route: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
      this.loadProductTypes();
    }
  createProduct(): void {
    this.productService.create({idProductType:this.product.productType, productName:this.product.productName}).subscribe(() => {
      this.router.navigate(['/index.html']);
      
    });
  }

  loadProductTypes(): void {
    this.productTypeService.getAll().subscribe((data) => {
      this.productTypes = data;
    });
  } 


}
