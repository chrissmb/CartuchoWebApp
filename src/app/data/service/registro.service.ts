import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../../shared/global';
import { AuthService } from '../../core/service/auth.service';
import { Observable } from 'rxjs';
import { Registro } from '../schema/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private options = {};
  private urlRegistros = `${global.apiUrlOrigin}registros`;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    this.options = {headers: authService.headersRest};
  }

  getRegistros(): Observable<Registro[]> {
    return this.http.get(this.urlRegistros, this.options) as Observable<Registro[]>;
  }

  getRegistrosPageable(): Observable<Registro[]> {
    return this.http.get(`${this.urlRegistros}/pageable`, this.options) as Observable<Registro[]>;
  }

  getRegistro(id: number): Observable<Registro> {
    return this.http.get(`${this.urlRegistros}/${id}`, this.options) as Observable<Registro>;
  }

  addRegisto(registro: Registro): Observable<Registro> {
    return this.http.post(this.urlRegistros, JSON.stringify(registro), this.options) as Observable<Registro>;
  }
}
