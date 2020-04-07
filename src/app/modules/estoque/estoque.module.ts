import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EstoqueAtualComponent } from './estoque-atual/estoque-atual.component';
import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueEntradaComponent } from './estoque-entrada/estoque-entrada.component';
import { EstoqueSaidaComponent } from './estoque-saida/estoque-saida.component';
import { EstoqueRegistroComponent } from './estoque-registro/estoque-registro.component';



@NgModule({
  declarations: [
    EstoqueAtualComponent,
    EstoqueEntradaComponent,
    EstoqueSaidaComponent,
    EstoqueRegistroComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule
  ]
})
export class EstoqueModule { }
