import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstoqueAtualComponent } from './estoque-atual/estoque-atual.component';
import { EstoqueEntradaComponent } from './estoque-entrada/estoque-entrada.component';
import { EstoqueSaidaComponent } from './estoque-saida/estoque-saida.component';
import { EstoqueRegistroComponent } from './estoque-registro/estoque-registro.component';


const routes: Routes = [
  {
    path: 'atual',
    component: EstoqueAtualComponent,
  }, {
    path: 'entrada',
    component: EstoqueEntradaComponent,
  }, {
    path: 'saida',
    component: EstoqueSaidaComponent,
  }, {
    path: 'registro',
    component: EstoqueRegistroComponent,
  }, {
    path: '',
    redirectTo: 'atual',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
