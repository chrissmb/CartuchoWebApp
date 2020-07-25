import { Component, OnInit } from '@angular/core';
import { Cartucho } from '../../../data/schema/cartucho';
import { CartuchoService } from '../../../data/service/cartucho.service';
import { ErroService } from '../../../core/service/erro.service';
import { AssyncSpinnerService } from '../../../shared/ui-components/assync-spinner/assync-spinner.service';

@Component({
  selector: 'app-estoque-atual',
  templateUrl: './estoque-atual.component.html',
  styleUrls: ['./estoque-atual.component.css']
})
export class EstoqueAtualComponent implements OnInit {

  cartuchos: Cartucho[];

  constructor(
    private cartuchoService: CartuchoService,
    private erroService: ErroService,
    private assyncSpinnerService: AssyncSpinnerService,
  ) { }

  ngOnInit(): void {
    this.cartuchoService.getCartuchosAtivos().subscribe(cartuchos => {
      this.cartuchos = cartuchos;
    });

    this.assyncSpinnerService.subscribeObservable(
      this.cartuchoService.getCartuchosAtivos(),
      cartuchos => this.cartuchos = cartuchos,
      erro => this.erroService.trataErro(erro),
    );
  }

}
