import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductTypeService } from 'src/app/services/productType.services';

@Component({
  selector: 'app-product-type-create',
  templateUrl: './product-type-create.component.html',
  styleUrls: ['./product-type-create.component.css']
})
export class ProductTypeCreateComponent {

  productType: any = {};
  

  constructor(private productTypeService: ProductTypeService, 
    private route: ActivatedRoute,
    private router: Router) {}

  createProductType(): void {
    this.productTypeService.create(this.productType).subscribe(() => {
      this.router.navigate(['/index.html']);
    });
  }
}
