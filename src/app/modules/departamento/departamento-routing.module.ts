import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoFormComponent } from './departamento-form/departamento-form.component';
import { DepartamentoGridComponent } from './departamento-grid/departamento-grid.component';
import { DepartamentoResolver } from './departamento.resolver';


const routes: Routes = [
  {
    path: 'grid',
    component: DepartamentoGridComponent,
  }, {
    path: 'novo',
    component: DepartamentoFormComponent,
  }, {
    path: ':id',
    component: DepartamentoFormComponent,
    resolve: {departamento: DepartamentoResolver}
  }, {
    path: '',
    redirectTo: 'grid',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule { }
