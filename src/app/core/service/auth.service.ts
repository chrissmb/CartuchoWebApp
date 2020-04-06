import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

import { Usuario } from '../../data/schema/usuario';
import * as global from '../../shared/global';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: Usuario;
  headersRest: HttpHeaders;

  constructor(private http: HttpClient) { }

  autenticar(usuario: Usuario): Observable<Usuario> {
    return this.http.post(`${global.apiUrlOrigin}login`,
        JSON.stringify(usuario), {observe: 'response'}).pipe(
      switchMap(response => {
        if (response == null) {
          return EMPTY;
        }
        this.defineHeadersParaConsumoRest(response);
        return this.http.get(`${global.apiUrlOrigin}usuarios/logado`,
            {headers: this.headersRest}) as Observable<Usuario>;
      })
    );
  }

  private defineHeadersParaConsumoRest(reponse: HttpResponse<any>) {
    const authorization = reponse.headers.get('Authorization');
    const token = authorization.split(' ')[1];
    this.headersRest = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
  }
}
