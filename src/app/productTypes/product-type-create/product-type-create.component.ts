import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductType } from 'src/app/model/Products.model';
import { ProductTypeService } from 'src/app/services/productType.services';

@Component({
  selector: 'app-product-type-create',
  templateUrl: './product-type-create.component.html',
  styleUrls: ['./product-type-create.component.css']
})
export class ProductTypeCreateComponent {

  productType = new ProductType();
  

  constructor(private productTypeService: ProductTypeService, 
    private route: ActivatedRoute,
    private router: Router) {}

  createProductType(): void {
    this.productTypeService.create(this.productType).subscribe(() => {
      this.router.navigate(['/index.html']);
    });
  }
}
