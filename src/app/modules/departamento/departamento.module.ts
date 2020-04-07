import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DepartamentoService } from '../../data/service/departamento.service';
import { SharedModule } from '../../shared/shared.module';
import { DepartamentoFormComponent } from './departamento-form/departamento-form.component';
import { DepartamentoGridComponent } from './departamento-grid/departamento-grid.component';
import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoComponent } from './departamento.component';
import { DepartamentoResolver } from './departamento.resolver';



@NgModule({
  declarations: [
    DepartamentoComponent,
    DepartamentoGridComponent,
    DepartamentoFormComponent,
  ],
  imports: [
    CommonModule,
    DepartamentoRoutingModule,
    SharedModule,
  ],
  providers: [
    DepartamentoService,
    DepartamentoResolver,
  ],
})
export class DepartamentoModule { }
