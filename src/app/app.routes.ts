import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/menu/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
];

export const appConfig = [
  provideRouter(routes),
];
