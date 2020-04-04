import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../../data/schema/usuario';
import * as global from '../../shared/global';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  autenticar(usuario: Usuario) {
    this.http.post(`${global.apiUrlOrigin}xlogin`, JSON.stringify(usuario), {observe: 'response'})
    .subscribe(v => console.log(v), e => console.log(e));
    return false;
  }
}
