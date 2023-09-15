export class ProductType {
  productTypeID: number = 0;
  productTypeName: string = '';
 
}

export class Product {
  productID: number = 0;
  productName: string = '';
  createdAt: String = '';
  productType: ProductType = new ProductType(); 
}

export class InfoProduct{
  idProductType: number = 0;
  productName: string = '';

}
