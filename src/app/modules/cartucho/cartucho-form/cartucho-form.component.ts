import { MessageBoxService } from './../../../shared/ui-components/message-box/message-box.service';
import { CartuchoService } from './../../../data/service/cartucho.service';
import { Component, OnInit } from '@angular/core';
import { Cartucho } from '../../../data/schema/cartucho';

@Component({
  selector: 'app-cartucho-form',
  templateUrl: './cartucho-form.component.html',
  styleUrls: ['./cartucho-form.component.css']
})
export class CartuchoFormComponent implements OnInit {

  cartucho: Cartucho = {};

  constructor(
    private cartuchoService: CartuchoService,
    private msgBoxService: MessageBoxService,
  ) { }

  ngOnInit(): void {
  }

  salvarCartucho() {
    this.cartuchoService.saveCartucho(this.cartucho).subscribe(
      c => this.cartucho = c,
      e => {
        console.error(e);
        this.msgBoxService.showMessage(e.error.message, 'Erro');
      }
    );
  }
}
