import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartuchoService } from '../../data/service/cartucho.service';
import { DepartamentoService } from '../../data/service/departamento.service';
import { SharedModule } from '../../shared/shared.module';
import { EstoqueAtualComponent } from './estoque-atual/estoque-atual.component';
import { EstoqueEntradaComponent } from './estoque-entrada/estoque-entrada.component';
import { EstoqueRegistroComponent } from './estoque-registro/estoque-registro.component';
import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueSaidaComponent } from './estoque-saida/estoque-saida.component';



@NgModule({
  declarations: [
    EstoqueAtualComponent,
    EstoqueEntradaComponent,
    EstoqueSaidaComponent,
    EstoqueRegistroComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    SharedModule,
  ],
  providers: [
    CartuchoService,
    DepartamentoService,
  ],
})
export class EstoqueModule { }
