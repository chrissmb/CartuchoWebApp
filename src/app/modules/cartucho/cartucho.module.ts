import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartuchoService } from '../../data/service/cartucho.service';
import { SharedModule } from '../../shared/shared.module';
import { CartuchoFormComponent } from './cartucho-form/cartucho-form.component';
import { CartuchoGridComponent } from './cartucho-grid/cartucho-grid.component';
import { CartuchoRoutingModule } from './cartucho-routing.module';
import { CartuchoComponent } from './cartucho.component';
import { CartuchoResolver } from './cartucho.resolver';



@NgModule({
  declarations: [CartuchoGridComponent, CartuchoFormComponent, CartuchoComponent],
  imports: [
    CommonModule,
    CartuchoRoutingModule,
    SharedModule,
  ],
  providers: [
    CartuchoService,
    CartuchoResolver
  ],
})
export class CartuchoModule { }
