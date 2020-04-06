import { Component, OnInit } from '@angular/core';
import { CartuchoService } from './../../../data/service/cartucho.service';
import { ErroService } from '../../../core/service/erro.service';
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
    private erroService: ErroService,
  ) { }

  ngOnInit(): void {
  }

  salvarCartucho() {
    this.cartuchoService.saveCartucho(this.cartucho).subscribe(
      c => this.cartucho = c,
      e => this.erroService.trataErro(e),
    );
  }
}
