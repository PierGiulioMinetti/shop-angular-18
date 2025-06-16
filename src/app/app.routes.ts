import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { dashboardResolver } from './resolvers/dashboard.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/menu/dashboard/dashboard.component').then((m) => m.DashboardComponent),
       resolve: {
          resolvedData: dashboardResolver
        }
  },
];

export const appConfig = [
  provideRouter(routes),
];
