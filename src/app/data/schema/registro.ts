import { Cartucho } from './cartucho';
import { Departamento } from './departamento';
import { Operacao } from './operacao';
import { Usuario } from './usuario';

export class Registro {
    id: number;
    cartucho: Cartucho;
    departamento: Departamento;
    quantidade: number;
    data: Date;
    operacao: Operacao;
    usuario: Usuario;

    constructor() {}
}
