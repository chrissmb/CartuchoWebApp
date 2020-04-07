import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Cartucho } from '../../data/schema/cartucho';
import { CartuchoService } from '../../data/service/cartucho.service';

@Injectable()
export class CartuchoResolver implements Resolve<Cartucho> {

    constructor(private cartuchoService: CartuchoService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id = route.paramMap.get('id');
        return this.cartuchoService.getCartucho(Number(id));
    }
}
