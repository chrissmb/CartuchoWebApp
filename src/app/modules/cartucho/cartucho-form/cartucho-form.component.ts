import { Component, OnInit } from '@angular/core';
import { Cartucho } from '../../../data/schema/cartucho';

@Component({
  selector: 'app-cartucho-form',
  templateUrl: './cartucho-form.component.html',
  styleUrls: ['./cartucho-form.component.css']
})
export class CartuchoFormComponent implements OnInit {

  cartucho: Cartucho = {
    id: 123,
    descricao: 'CA1010',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
