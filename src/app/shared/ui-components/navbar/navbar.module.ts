import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent, 
    NavbarItemComponent,
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }