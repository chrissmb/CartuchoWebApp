import { AuthService } from './../../core/service/auth.service';
import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../data/schema/usuario';
import { Router } from '@angular/router';
import { MessageBoxService } from '../../shared/ui-components/message-box/message-box.service';
import { AssyncSpinnerService } from '../../shared/ui-components/assync-spinner/assync-spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(
    private authService: AuthService,
    private router: Router,
    private msgBoxService: MessageBoxService,
    private assyncSpinnerService: AssyncSpinnerService,
  ) { }

  ngOnInit(): void {
  }

  autenticar() {
    this.assyncSpinnerService.subscribeObservable(
      this.authService.autenticar(this.usuario),
      (usuario: Usuario) => {
        this.authService.usuarioAutenticado = usuario;
        this.router.navigate(['/content']);
      }, e => {
        console.error(e);
        this.msgBoxService.showMessage('Falha na autenticação', 'Erro');
      }
    );
  }
}
