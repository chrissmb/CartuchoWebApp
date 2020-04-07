import { Component, OnInit } from '@angular/core';
import { Cartucho } from '../../../data/schema/cartucho';
import { CartuchoService } from '../../../data/service/cartucho.service';

@Component({
  selector: 'app-estoque-atual',
  templateUrl: './estoque-atual.component.html',
  styleUrls: ['./estoque-atual.component.css']
})
export class EstoqueAtualComponent implements OnInit {

  cartuchos: Cartucho[];
  loading = true;

  constructor(private cartuchoService: CartuchoService) { }

  ngOnInit(): void {
    this.cartuchoService.getCartuchosAtivos().subscribe(cartuchos => {
      this.loading = false;
      this.cartuchos = cartuchos;
    });
  }

}
