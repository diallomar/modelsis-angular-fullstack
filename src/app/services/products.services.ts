import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoProduct } from '../model/Products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:9092/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  create(product: InfoProduct): Observable<any> {
    return this.http.post(this.baseUrl, product);
  }

  update(id: number, product: InfoProduct): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
