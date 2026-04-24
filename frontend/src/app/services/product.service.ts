import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) { }

  // GET - Récupérer tous les produits
  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // GET - Récupérer un produit par ID
  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // POST - Créer un nouveau produit
  createProduct(product: Product): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  // PUT - Mettre à jour un produit
  updateProduct(id: string, product: Product): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, product);
  }

  // DELETE - Supprimer un produit
  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
