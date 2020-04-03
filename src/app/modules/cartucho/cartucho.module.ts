import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartuchoRoutingModule } from './cartucho-routing.module';
import { CartuchoGridComponent } from './cartucho-grid/cartucho-grid.component';
import { CartuchoFormComponent } from './cartucho-form/cartucho-form.component';
import { CartuchoComponent } from './cartucho.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [CartuchoGridComponent, CartuchoFormComponent, CartuchoComponent],
  imports: [
    CommonModule,
    CartuchoRoutingModule,
    SharedModule,
  ]
})
export class CartuchoModule { }
