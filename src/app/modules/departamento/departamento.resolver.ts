import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Departamento } from '../../data/schema/departamento';
import { DepartamentoService } from '../../data/service/departamento.service';

@Injectable()
export class DepartamentoResolver implements Resolve<Departamento> {

    constructor(private departamentoService: DepartamentoService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id = route.paramMap.get('id');
        return this.departamentoService.getDepartamento(Number(id));
    }
}
