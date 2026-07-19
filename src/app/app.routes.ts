import { Routes } from '@angular/router';
import { StoreinduCompra } from './storeindu-compra/storeindu-compra';
import { StoreinduAbout } from './storeindu-about/storeindu-about';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'compras',
        pathMatch: 'full'
    },
    {
        path: 'compras',
        component: StoreinduCompra,
    },
    {
        path: 'about',
        component: StoreinduAbout,
    }
];
