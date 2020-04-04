import { AuthService } from './../../core/service/auth.service';
import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../data/schema/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {login: ''};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  autenticar() {
    this.authService.autenticar(this.usuario);
  }
}
