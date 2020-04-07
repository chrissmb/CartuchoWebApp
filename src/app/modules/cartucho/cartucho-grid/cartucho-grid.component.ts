import { Component, OnInit } from '@angular/core';
import { CartuchoService } from '../../../data/service/cartucho.service';
import { Cartucho } from '../../../data/schema/cartucho';

@Component({
  selector: 'app-cartucho-grid',
  templateUrl: './cartucho-grid.component.html',
  styleUrls: ['./cartucho-grid.component.css']
})
export class CartuchoGridComponent implements OnInit {

  cartuchos: Cartucho[];
  loading = true;

  constructor(
    private cartuchoService: CartuchoService
  ) { }

  ngOnInit(): void {
    this.cartuchoService.getCartuchosAtivos().subscribe(cartuchos => {
      this.cartuchos = cartuchos;
      this.loading = false;
    });
  }

}
