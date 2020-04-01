import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Output() changePage = new EventEmitter();
  @Input() page: number;
  @Input() totalItens: number = null;
  @Input('totalPages') set updateTotalPagesValue(totalPages: number) {
    this.totalPages = totalPages;
    this.listaPaginas();
  }

  totalPages: number;
  qtdPaginacao = 3;
  arrayPages: number[];

  constructor() {}

  ngOnInit() {
    this.changePage.emit(1);
  }

  listaPaginas() {
    this.arrayPages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.arrayPages.push(i);
    }
  }

  mudaPag(pag: number) {
    this.changePage.emit(pag);
  }

  proxPagina() {
    if (this.page < this.totalPages) {
      this.mudaPag(this.page + 1);
    }
  }

  paginaAnt() {
    if (this.page > 1) {
      this.mudaPag(this.page - 1);
    }
  }

  primeiraPag() {
    this.mudaPag(1);
  }

  ultimaPag() {
    this.mudaPag(this.totalPages);
  }

  diminuiPaginacao(pags) {
    const metadePgs = Math.ceil(this.qtdPaginacao / 2);
    let i = this.page - metadePgs;
    if (i < 0) {
      i = 0;
    }
    let f = i + this.qtdPaginacao;
    if (f > pags.length) {
      f = pags.length;
      i = f - this.qtdPaginacao;
      if (i < 0) {
        i = 0;
      }
    }
    return pags.slice(i, f);
  }
}