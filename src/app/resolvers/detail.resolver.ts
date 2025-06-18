import { ResolveFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../interfaces/items.interface';
import { ItemsServiceService } from '../services/items-service.service';

import { UrlTree } from '@angular/router';

export const detailResolver: ResolveFn<Product | UrlTree> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const itemsService = inject(ItemsServiceService);
  const router = inject(Router);
  const id = Number(route.paramMap.get('id'));
  console.log('id resolver: ', id);

  return itemsService.getProduct(id).pipe(
    map(product => {
      if (product) {
        console.log('product resolver: ', product);

        return product;
      } else {
        // If product not found, redirect to /not-found
        return router.createUrlTree(['/not-found']);
      }
    })
  );
};
