import { Component, OnInit, OnDestroy } from '@angular/core';
import { Departamento } from '../../../data/schema/departamento';
import { Subscription } from 'rxjs';
import { DepartamentoService } from '../../../data/service/departamento.service';
import { ErroService } from '../../../core/service/erro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AssyncSpinnerService } from '../../../shared/ui-components/assync-spinner/assync-spinner.service';

@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css']
})
export class DepartamentoFormComponent implements OnInit, OnDestroy {

  departamento: Departamento = new Departamento();
  inscricao: Subscription;

  constructor(
    private departamentoService: DepartamentoService,
    private erroService: ErroService,
    private route: ActivatedRoute,
    private router: Router,
    private assyncSpinnerService: AssyncSpinnerService,
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
    this.assyncSpinnerService.subscribeObservable(
      this.departamentoService.saveDepartamento(this.departamento),
      depto => this.router.navigate(['content', 'departamento', depto.id]),
      erro => this.erroService.trataErro(erro),
    );
  }
}
