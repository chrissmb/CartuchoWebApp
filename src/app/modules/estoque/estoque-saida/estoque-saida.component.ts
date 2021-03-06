import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/data/schema/registro';
import { Operacao } from 'src/app/data/schema/operacao';
import { Cartucho } from 'src/app/data/schema/cartucho';
import { Departamento } from '../../../data/schema/departamento';
import { DepartamentoService } from '../../../data/service/departamento.service';
import { RegistroService } from 'src/app/data/service/registro.service';
import { CartuchoService } from 'src/app/data/service/cartucho.service';
import { ErroService } from 'src/app/core/service/erro.service';
import { AssyncSpinnerService } from '../../../shared/ui-components/assync-spinner/assync-spinner.service';

@Component({
  selector: 'app-estoque-saida',
  templateUrl: './estoque-saida.component.html',
  styleUrls: ['./estoque-saida.component.css']
})
export class EstoqueSaidaComponent implements OnInit {

  registro = new Registro(Operacao.SAIDA);
  cartuchos: Cartucho[];
  deptos: Departamento[];

  constructor(
    private registroService: RegistroService,
    private cartuchoService: CartuchoService,
    private deptoService: DepartamentoService,
    private erroService: ErroService,
    private assyncSpinnerSerice: AssyncSpinnerService,
  ) { }

  ngOnInit(): void {
    this.cartuchoService.getCartuchosAtivos()
      .subscribe(cartuchos => this.cartuchos = cartuchos);
    this.deptoService.getDepartamentosAtivos()
      .subscribe(deptos => this.deptos = deptos);
  }

  salvarSaida() {
    this.assyncSpinnerSerice.subscribeObservable(
      this.registroService.addRegisto(this.registro),
      registro => this.registro = new Registro(Operacao.SAIDA),
      erro => this.erroService.trataErro(erro),
    );
  }
}
