import { Component, OnInit } from '@angular/core';
import { CartuchoService } from '../../../data/service/cartucho.service';
import { Cartucho } from '../../../data/schema/cartucho';
import { AssyncSpinnerService } from '../../../shared/ui-components/assync-spinner/assync-spinner.service';
import { ErroService } from '../../../core/service/erro.service';

@Component({
  selector: 'app-cartucho-grid',
  templateUrl: './cartucho-grid.component.html',
  styleUrls: ['./cartucho-grid.component.css']
})
export class CartuchoGridComponent implements OnInit {

  cartuchos: Cartucho[];

  constructor(
    private cartuchoService: CartuchoService,
    private assyncSpinnerService: AssyncSpinnerService,
    private erroService: ErroService,
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
