import { Component, OnInit, OnDestroy } from '@angular/core';
import { Departamento } from '../../../data/schema/departamento';
import { Subscription } from 'rxjs';
import { DepartamentoService } from '../../../data/service/departamento.service';
import { ErroService } from '../../../core/service/erro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css']
})
export class DepartamentoFormComponent implements OnInit, OnDestroy {

  departamento: Departamento = {ativo: true};
  inscricao: Subscription;
  saving = false;

  constructor(
    private departamentoService: DepartamentoService,
    private erroService: ErroService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.data.subscribe(data => {
      if ((data && data.departamento) != null) {
        this.departamento = data.departamento;
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  salvarDepartamento() {
    this.saving = true;
    this.departamentoService.saveDepartamento(this.departamento).subscribe(
      depto => {
        this.router.navigate(['content', 'departamento', depto.id]);
        this.saving = false;
      },
      erro => {
        this.erroService.trataErro(erro);
        this.saving = false;
      },
    );
  }
}
