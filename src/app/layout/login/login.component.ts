import { AuthService } from './../../core/service/auth.service';
import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../data/schema/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {login: ''};

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  autenticar() {
    this.authService.autenticar(this.usuario).subscribe((usuario: Usuario) => {
      this.authService.usuarioAutenticado = usuario;
      this.router.navigate(['/content']);
    }, e => {
      console.error('Falha na autenticação: ', e.message);
    });
  }
}
