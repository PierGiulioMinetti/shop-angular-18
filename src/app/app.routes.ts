import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { dashboardResolver } from './resolvers/dashboard.resolver';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { detailResolver } from './resolvers/detail.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/dashboard/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    resolve: {
      resolvedData: dashboardResolver,
    },
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./components/detail/detail-page/detail-page.component').then(
        (m) => m.DetailPageComponent
      ),
    resolve: {
      resolvedData: detailResolver,
    },
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

export const appConfig = [provideRouter(routes)];
