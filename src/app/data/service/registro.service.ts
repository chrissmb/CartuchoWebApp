import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/service/auth.service';
import * as global from '../../shared/global';
import { Page } from '../schema/page';
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
    this.options = { headers: authService.headersRest };
  }

  getRegistros(): Observable<Registro[]> {
    return this.http.get(this.urlRegistros, this.options) as Observable<Registro[]>;
  }

  getRegistrosPageable(page: number, size: number, dtInicio: Date, dtFinal: Date): Observable<Page> {
    let url = `${this.urlRegistros}/pageable?page=${page}&size=${size}`;
    if (dtInicio != null && dtFinal != null) {
      url += `&dtinicio=${this.formatDate(dtInicio)}&dtfim=${this.formatDate(dtFinal)}`;
    }
    return this.http.get(url, this.options) as Observable<Page>;
  }

  getRegistro(id: number): Observable<Registro> {
    return this.http.get(`${this.urlRegistros}/${id}`, this.options) as Observable<Registro>;
  }

  addRegisto(registro: Registro): Observable<Registro> {
    return this.http.post(this.urlRegistros, JSON.stringify(registro), this.options) as Observable<Registro>;
  }

  private formatDate(date: Date): string {
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const diaStr = dia < 10 ? '0' + dia : '' + dia;
    const mesStr = mes < 10 ? '0' + mes : '' + mes;
    return diaStr + '-' + mesStr + '-' + date.getFullYear();
  }
}
