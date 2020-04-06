import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../../core/service/auth.service';
import * as global from '../../shared/global';
import { Cartucho } from '../schema/cartucho';

@Injectable({
  providedIn: 'root'
})
export class CartuchoService {

  private headers: HttpHeaders;
  private urlCartuchos = `${global.apiUrlOrigin}cartuchos`;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    this.headers = authService.headersRest;
  }

  getCartuchosAtivos(): Observable<Cartucho[]> {
    return this.http.get(this.urlCartuchos, {headers: this.headers}) as Observable<Cartucho[]>;
  }

  saveCartucho(cartucho: Cartucho): Observable<Cartucho> {
    return this.http.post(this.urlCartuchos, JSON.stringify(cartucho), {headers: this.headers}) as Observable<Cartucho>;
  }
}
