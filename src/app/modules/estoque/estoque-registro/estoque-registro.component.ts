import { Component, OnInit } from '@angular/core';
import { Page } from '../../../data/schema/page';
import { Registro } from '../../../data/schema/registro';
import { RegistroService } from '../../../data/service/registro.service';
import { ErroService } from '../../../core/service/erro.service';
import { Operacao } from '../../../data/schema/operacao';

@Component({
  selector: 'app-estoque-registro',
  templateUrl: './estoque-registro.component.html',
  styleUrls: ['./estoque-registro.component.css']
})
export class EstoqueRegistroComponent implements OnInit {

  readonly SIZE_PAGE = 10;

  registros: Registro[];
  pageNumber: number;
  dtInicio: Date;
  dtFinal: Date;
  totalElements: number;
  totalPages: number;
  loading = false;

  constructor(
    private registroService: RegistroService,
    private erroService: ErroService,
  ) { }

  ngOnInit(): void {
  }

  consultarRegistros(pagina: number) {
    this.registros = [];
    this.loading = true;
    this.registroService.getRegistrosPageable(
      pagina - 1,
      this.SIZE_PAGE,
      this.dtInicio,
      this.dtFinal
    ).subscribe(
      page => {
        this.registros = page.content;
        this.pageNumber = page.number + 1;
        this.totalPages = page.totalPages;
        this.totalElements = page.totalElements;
        this.loading = false;
      },
      erro => {
        this.erroService.trataErro(erro);
        this.loading = false;
      }
    );
  }
}
