import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../../data/schema/departamento';
import { DepartamentoService } from '../../../data/service/departamento.service';

@Component({
  selector: 'app-departamento-grid',
  templateUrl: './departamento-grid.component.html',
  styleUrls: ['./departamento-grid.component.css']
})
export class DepartamentoGridComponent implements OnInit {

  departamentos: Departamento[];
  loading = true;

  constructor(
    private departamentoService: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.departamentoService.getDepartamentosAtivos().subscribe(departamentos => {
        this.departamentos = departamentos;
        this.loading = false;
    });
  }
}
