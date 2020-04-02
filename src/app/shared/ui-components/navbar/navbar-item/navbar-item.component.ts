import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { NavbarItem } from '../navbar-item';

@Component({
  selector: 'ui-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css']
})
export class NavbarItemComponent implements OnInit {

  @Input() item: NavbarItem;
  @Input() sidebar = false;
  show = false;
  clickedIn = false;
  mobWidth = 600;


  constructor(private router: Router) { }

  ngOnInit() {}

  ngAfterViewChecked() {
  }

  @HostListener('document:click')
  clickOut() {
    if (!this.show || this.clickedIn) {
      this.clickedIn = false;
    } else {
      if (window.innerWidth > this.mobWidth && !this.sidebar)
        this.show = false;
    }
  }

  clickIn() {
    this.show = !this.show;
    this.clickedIn = true;
  }

}
