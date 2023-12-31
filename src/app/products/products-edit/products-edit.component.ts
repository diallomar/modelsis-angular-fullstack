import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/products.services';
import { ProductTypeService } from '../../services/productType.services';
import { InfoProduct, Product, ProductType } from '../../model/Products.model';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit{
  product = new Product();
  infoProduct = new InfoProduct()
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
  
    this.infoProduct.idProductType = this.product.productType.productTypeID
    this.infoProduct.productName = this.product.productName

    this.productService.update(this.product.productID, this.infoProduct).subscribe(() => {
      this.router.navigate(['/index.html']);
    });
  }

  loadProductTypes(): void {
    this.productTypeService.getAll().subscribe((data) => {
      this.productTypes = data;
    });
  } 
}
