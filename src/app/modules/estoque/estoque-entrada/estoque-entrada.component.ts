import { Component, OnInit } from '@angular/core';
import { Registro } from '../../../data/schema/registro';
import { RegistroService } from '../../../data/service/registro.service';
import { CartuchoService } from '../../../data/service/cartucho.service';
import { Cartucho } from '../../../data/schema/cartucho';
import { Operacao } from '../../../data/schema/operacao';
import { ErroService } from '../../../core/service/erro.service';

@Component({
  selector: 'app-estoque-entrada',
  templateUrl: './estoque-entrada.component.html',
  styleUrls: ['./estoque-entrada.component.css']
})
export class EstoqueEntradaComponent implements OnInit {

  registro = new Registro(Operacao.ENTRADA);
  cartuchos: Cartucho[];
  saving = false;

  constructor(
    private registroService: RegistroService,
    private cartuchoService: CartuchoService,
    private erroService: ErroService,
  ) { }

  ngOnInit(): void {
    this.cartuchoService.getCartuchosAtivos()
      .subscribe(cartuchos => this.cartuchos = cartuchos);
  }

  salvarEntrada() {
    this.saving = true;
    this.registroService.addRegisto(this.registro).subscribe(
      registro => {
        this.registro = new Registro(Operacao.ENTRADA);
        this.saving = false;
      },
      erro => {
        this.erroService.trataErro(erro);
        this.saving = false;
      },
    );
  }
}
