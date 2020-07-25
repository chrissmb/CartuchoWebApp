import { Component, OnInit } from '@angular/core';
import { Registro } from '../../../data/schema/registro';
import { RegistroService } from '../../../data/service/registro.service';
import { CartuchoService } from '../../../data/service/cartucho.service';
import { Cartucho } from '../../../data/schema/cartucho';
import { Operacao } from '../../../data/schema/operacao';
import { ErroService } from '../../../core/service/erro.service';
import { AssyncSpinnerService } from '../../../shared/ui-components/assync-spinner/assync-spinner.service';

@Component({
  selector: 'app-estoque-entrada',
  templateUrl: './estoque-entrada.component.html',
  styleUrls: ['./estoque-entrada.component.css']
})
export class EstoqueEntradaComponent implements OnInit {

  registro = new Registro(Operacao.ENTRADA);
  cartuchos: Cartucho[];

  constructor(
    private registroService: RegistroService,
    private cartuchoService: CartuchoService,
    private erroService: ErroService,
    private assyncSpinnerService: AssyncSpinnerService,
  ) { }

  ngOnInit(): void {
    this.cartuchoService.getCartuchosAtivos()
      .subscribe(cartuchos => this.cartuchos = cartuchos);
  }

  salvarEntrada() {
    this.assyncSpinnerService.subscribeObservable(
      this.registroService.addRegisto(this.registro),
      registro => this.registro = new Registro(Operacao.ENTRADA),
      erro => this.erroService.trataErro(erro),
    );
  }
}
