import { Routes } from '@angular/router';
import { Landing } from './pages/devdigvijay-landing/devdigvijay-landing';

export const routes: Routes = [
    {
        path: '',
        component: Landing,
        title:"DevDigvijay"
    },
    {
        path: '**',
        redirectTo: ''
    }
];
