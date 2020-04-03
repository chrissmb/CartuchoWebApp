import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartuchoGridComponent } from './cartucho-grid/cartucho-grid.component';
import { CartuchoFormComponent } from './cartucho-form/cartucho-form.component';
import { CartuchoComponent } from './cartucho.component';


const routes: Routes = [
  {
    path: '',
    component: CartuchoComponent,
    children: [
      {
        path: '',
        redirectTo: 'grid',
        pathMatch: 'full',
      }, {
        path: 'grid',
        component: CartuchoGridComponent,
      }, {
        path: 'novo',
        component: CartuchoFormComponent,
      } , {
        path: ':id',
        component: CartuchoFormComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartuchoRoutingModule { }
