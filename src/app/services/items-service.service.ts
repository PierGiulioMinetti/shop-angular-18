import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemsI } from '../interfaces/items.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  URL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getItems():Observable<ItemsI>{
    return this.http.get<ItemsI>(this.URL)
  }
}
