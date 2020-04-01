import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() mw = 12;
  @Input() dw = 6;
  @Input() dm = 0;
  @Input() mm = 0;
  @Input() title: string;
  @Input() color = '';

  largura: number;
  margin: number;
  mobWidth = 600;

  constructor() { }

  ngOnInit() {
    this.responsividade(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.responsividade(window.innerWidth);
  }

  responsividade(w) {
    let eMobile = w <= this.mobWidth;
    let cols = eMobile ? this.mw : this.dw;
    let margin = eMobile ? this.mm : this.dm;
    this.largura = (100 / 12) * cols;
    this.margin = (100 / 12) * margin;
  }
}