import { Component, OnInit } from '@angular/core';
import { NavbarItem } from '../../shared/ui-components/navbar/navbar-item';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.css']
})
export class ContentLayoutComponent implements OnInit {

  menu: NavbarItem[] = [
    {label: 'Cadastro', dropdown: [
      {label: 'Cartucho', link: 'cartucho'},
      {label: 'Departamento', link: 'departamento'},
    ]}, {
      label: 'Estoque', dropdown: [
        {label: 'Entrada', link: 'estoque/entrada'},
        {label: 'Saída', link: 'estoque/saida'},
        {label: 'Registros', link: 'estoque/registros'},
    ]},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
