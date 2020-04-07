import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErroService } from '../../../core/service/erro.service';
import { Cartucho } from '../../../data/schema/cartucho';
import { CartuchoService } from './../../../data/service/cartucho.service';

@Component({
  selector: 'app-cartucho-form',
  templateUrl: './cartucho-form.component.html',
  styleUrls: ['./cartucho-form.component.css']
})
export class CartuchoFormComponent implements OnInit, OnDestroy {

  cartucho: Cartucho = {};
  inscricao: Subscription;

  constructor(
    private cartuchoService: CartuchoService,
    private erroService: ErroService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.data
      .subscribe(data => {
        if (data.cartucho != null) {
          this.cartucho = data.cartucho;
        }
      });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  salvarCartucho() {
    this.cartuchoService.saveCartucho(this.cartucho).subscribe(
      c => {
        this.router.navigate(['content', 'cartucho', c.id]);
      },
      e => this.erroService.trataErro(e),
    );
  }
}
