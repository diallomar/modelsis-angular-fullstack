import { Component } from '@angular/core';
import { ProductService } from '../../services/products.services';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoProduct, Product, ProductType } from '../../model/Products.model';
import { ProductTypeService } from '../../services/productType.services';
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent {
  product = new Product();
  infoProduct = new InfoProduct()
  productTypes: ProductType[] = [];
  
  constructor(private productService: ProductService, 
    private productTypeService: ProductTypeService,
    private route: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
      this.loadProductTypes();
    }
  createProduct(): void {
    if (this.infoProduct.idProductType && this.infoProduct.productName) {
      this.productService.create(this.infoProduct).subscribe(() => {
        this.router.navigate(['/index.html']);
      },(error=>{
        alert("Une erreur s'est produite. Assurer vous que ce produit n'exite pas !")
      }));
    }else{
      alert("le nom du produit et le type ne doivent pas être nulls");
    }
    
  }

  loadProductTypes(): void {
    this.productTypeService.getAll().subscribe((data) => {
      this.productTypes = data;
    });
  } 


}
