import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ElementosSitioComponent } from './pages/elementos-sitio/elementos-sitio.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BreadcrumbsComponent } from './pages/breadcrumbs/breadcrumbs.component';
import { MapaSitioComponent } from './pages/mapa-sitio/mapa-sitio.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';


export const routes: Routes = [
    {
        path: "",
        component: InicioComponent,
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'elementos-sitio',
        component: ElementosSitioComponent
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'breadcrumbs',
        component: BreadcrumbsComponent
    },
    {
        path: 'mapa-sitio',
        component: MapaSitioComponent
    },
    {
        path: 'busqueda',
        component: BusquedaComponent
    },
    {
        path: '**',
        component: Error404Component
    }
];
