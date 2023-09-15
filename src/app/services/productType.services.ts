import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Products.model';

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
  create(product: Product): Observable<any> {
    return this.http.post(this.baseUrl, product);
  }

  update(id: number, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

}
