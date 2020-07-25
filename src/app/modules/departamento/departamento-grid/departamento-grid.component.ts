import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../../data/schema/departamento';
import { DepartamentoService } from '../../../data/service/departamento.service';
import { AssyncSpinnerService } from '../../../shared/ui-components/assync-spinner/assync-spinner.service';
import { ErroService } from '../../../core/service/erro.service';

@Component({
  selector: 'app-departamento-grid',
  templateUrl: './departamento-grid.component.html',
  styleUrls: ['./departamento-grid.component.css']
})
export class DepartamentoGridComponent implements OnInit {

  departamentos: Departamento[];

  constructor(
    private departamentoService: DepartamentoService,
    private assyncSpinnerService: AssyncSpinnerService,
    private erroService: ErroService,
  ) { }

  ngOnInit(): void {
    this.departamentoService.getDepartamentosAtivos().subscribe(departamentos => {
        this.departamentos = departamentos;
    });

    this.assyncSpinnerService.subscribeObservable(
      this.departamentoService.getDepartamentosAtivos(),
      departamentos => this.departamentos = departamentos,
      erro => this.erroService.trataErro(erro),
    );
  }
}
