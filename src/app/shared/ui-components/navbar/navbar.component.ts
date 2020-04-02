import { Component, OnInit, Input } from '@angular/core';

import { NavbarItem } from './navbar-item';

@Component({
  selector: 'ui-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() itens: NavbarItem[];
  @Input() color = '';
  @Input() sidebar = false;

  classes() {
    return {
      sidebar: this.sidebar,
      navbar: !this.sidebar,
      red: this.color == 'red',
      green: this.color == 'green',
      purple: this.color == 'purple',
      orange: this.color == 'orange',
    };
  }

  constructor() {}

  ngOnInit() {}

}
