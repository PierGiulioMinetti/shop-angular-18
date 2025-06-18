import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemsI, Product } from '../interfaces/items.interface';
import { catchError, find, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsServiceService {
  URL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getItems(): Observable<ItemsI> {
    return this.http.get<ItemsI>(this.URL);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }

  // product.service.ts
  getProduct(id: number): Observable<Product | null> {
    return this.http.get<any>(this.URL).pipe(
      map((res) => {
        const products = res[0];

        if (!Array.isArray(products)) {
          throw new Error(
            'Invalid response format: expected array inside res[0]'
          );
        }

        const product: Product | undefined = products.find(
          (p: Product) => p.id === id
        );
        return product ?? null;
      }),
      catchError((err) => {
        console.error('Failed to fetch product:', err);
        return of(null);
      })
    );
  }
}
