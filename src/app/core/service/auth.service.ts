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

  async autenticar(usuario: Usuario) {
    let resp = null;
    try {
      resp = await this.http.post(`${global.apiUrlOrigin}xlogin`, JSON.stringify(usuario), {observe: 'response'}).toPromise();
      console.log(resp.headers.get('Authorization'));
    } catch(e) {
      console.log(e);
    }
    console.log(resp);
    return false;
  }
}
