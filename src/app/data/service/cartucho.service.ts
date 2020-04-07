import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/service/auth.service';
import * as global from '../../shared/global';
import { Cartucho } from '../schema/cartucho';


@Injectable({
  providedIn: 'root'
})
export class CartuchoService {

  private options = {};
  private urlCartuchos = `${global.apiUrlOrigin}cartuchos`;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    this.options = {headers: authService.headersRest};
  }

  getCartuchosAtivos(): Observable<Cartucho[]> {
    return this.http.get(this.urlCartuchos, this.options) as Observable<Cartucho[]>;
  }

  saveCartucho(cartucho: Cartucho): Observable<Cartucho> {
    if (cartucho.id == null) {
      return this.http.post(this.urlCartuchos,
          JSON.stringify(cartucho), this.options) as Observable<Cartucho>;
    } else {
      return this.http.put(`${this.urlCartuchos}/${cartucho.id}`,
          JSON.stringify(cartucho), this.options) as Observable<Cartucho>;
    }
  }

  getCartucho(id: number): Observable<Cartucho> {
    return this.http.get(`${this.urlCartuchos}/${id}`, this.options) as Observable<Cartucho>;
  }
}
