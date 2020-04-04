import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentsModule } from './ui-components/ui-components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiComponentsModule,
    FormsModule,
  ],
  exports: [
    UiComponentsModule,
    FormsModule,
  ]
})
export class SharedModule { }
