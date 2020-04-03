import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../../data/schema/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  autenticar(usuario: Usuario): Observable<any> {
    return this.http.get('https://httpbin.org/delay/7');
  }
}
