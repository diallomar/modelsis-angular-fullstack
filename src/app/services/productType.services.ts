import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductType } from '../model/Products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductTypeService {
  private baseUrl = 'http://localhost:9092/productTypes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  create(productType: ProductType): Observable<any> {
    return this.http.post(this.baseUrl, productType);
  }

  update(id: number, productType: ProductType): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, productType);
  }

}
