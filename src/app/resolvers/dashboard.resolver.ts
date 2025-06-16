import { ResolveFn } from '@angular/router';
import { Product } from '../interfaces/items.interface';
import { Observable } from 'rxjs';
import { ItemsServiceService } from '../services/items-service.service';
import { inject } from '@angular/core';


export const dashboardResolver: ResolveFn<Observable<Product[]>> = (route, state) => {
  const itemsService = inject(ItemsServiceService);
  return itemsService.getProducts(); // Replace getProducts with the actual method returning Observable<Product[][]>
};
