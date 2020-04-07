import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/service/auth.service';
import * as global from '../../shared/global';
import { Departamento } from '../schema/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private options = {};
  private urlDepartamentos = `${global.apiUrlOrigin}departamentos`;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    this.options = {headers: authService.headersRest};
  }

  getDepartamentosAtivos(): Observable<Departamento[]> {
    return this.http.get(this.urlDepartamentos, this.options) as Observable<Departamento[]>;
  }

  saveDepartamento(departamento: Departamento): Observable<Departamento> {
    if (departamento.id == null) {
      return this.http.post(this.urlDepartamentos,
          JSON.stringify(departamento), this.options) as Observable<Departamento>;
    } else {
      return this.http.put(`${this.urlDepartamentos}/${departamento.id}`,
          JSON.stringify(departamento), this.options) as Observable<Departamento>;
    }
  }

  getDepartamento(id: number): Observable<Departamento> {
    return this.http.get(`${this.urlDepartamentos}/${id}`, this.options) as Observable<Departamento>;
  }
}
