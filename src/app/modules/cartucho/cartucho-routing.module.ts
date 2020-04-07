import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartuchoFormComponent } from './cartucho-form/cartucho-form.component';
import { CartuchoGridComponent } from './cartucho-grid/cartucho-grid.component';
import { CartuchoComponent } from './cartucho.component';
import { CartuchoResolver } from './cartucho.resolver';



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
        resolve: {cartucho: CartuchoResolver},
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartuchoRoutingModule { }
