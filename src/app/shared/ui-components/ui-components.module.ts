import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Locale pt-BR
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { BtnComponent } from './btn/btn.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { NumberFieldComponent } from './number-field/number-field.component';
import { OnlineBoxComponent } from './online-box/online-box.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TabsComponent } from './tabs/tabs.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { EditComboBoxComponent } from './edit-combo-box/edit-combo-box.component';
import { CardComponent } from './card/card.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DateFieldComponent } from './date-field/date-field.component';
import { DatetimeFieldComponent } from './datetime-field/datetime-field.component';
import { MessageBoxComponent } from './message-box/message-box.component';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    BtnComponent,
    CheckboxComponent,
    ComboBoxComponent,
    EditComboBoxComponent,
    GridComponent,
    ListComponent,
    ModalComponent,
    NavbarComponent,
    NavbarItemComponent,
    NumberFieldComponent,
    OnlineBoxComponent,
    PaginationComponent,
    TabsComponent,
    TextFieldComponent,
    CardComponent,
    SpinnerComponent,
    DateFieldComponent,
    DatetimeFieldComponent,
    MessageBoxComponent,
  ],
  exports: [
    BtnComponent,
    CheckboxComponent,
    ComboBoxComponent,
    EditComboBoxComponent,
    GridComponent,
    ListComponent,
    ModalComponent,
    NavbarComponent,
    NumberFieldComponent,
    OnlineBoxComponent,
    PaginationComponent,
    TabsComponent,
    TextFieldComponent,
    CardComponent,
    SpinnerComponent,
    DateFieldComponent,
    DatetimeFieldComponent,
  ]
})
export class UiComponentsModule { }