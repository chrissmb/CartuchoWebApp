import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErroService } from '../../../core/service/erro.service';
import { Cartucho } from '../../../data/schema/cartucho';
import { CartuchoService } from './../../../data/service/cartucho.service';
import { AssyncSpinnerService } from '../../../shared/ui-components/assync-spinner/assync-spinner.service';

@Component({
  selector: 'app-cartucho-form',
  templateUrl: './cartucho-form.component.html',
  styleUrls: ['./cartucho-form.component.css']
})
export class CartuchoFormComponent implements OnInit, OnDestroy {

  cartucho = new Cartucho();
  inscricao: Subscription;

  constructor(
    private cartuchoService: CartuchoService,
    private erroService: ErroService,
    private route: ActivatedRoute,
    private router: Router,
    private assyncSpinnerService: AssyncSpinnerService,
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.data.subscribe(data => {
      if (data && data.cartucho) {
        this.cartucho = data.cartucho;
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  salvarCartucho() {
    this.assyncSpinnerService.subscribeObservable(
      this.cartuchoService.saveCartucho(this.cartucho),
      cartucho => this.router.navigate(['content', 'cartucho', cartucho.id]),
      erro => this.erroService.trataErro(erro),
    );
  }
}
