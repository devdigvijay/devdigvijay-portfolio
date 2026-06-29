import { Routes } from '@angular/router';
import { Landing } from './pages/devdigvijay-landing/devdigvijay-landing';
import { Page404 } from './pages/page-404/page-404';

export const routes: Routes = [
    {
    path: '',
    component: Landing,
    title: "DevDigvijay",
    pathMatch: 'full'
  },
  {
    path: '404',
    component: Page404,
    title: "DevDigvijay"
  },
  {
    path: '**',
    redirectTo: '404' 
  }
];
