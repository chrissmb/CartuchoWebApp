import { Role } from './role';

export class Usuario {
  id: number;
  login: string;
  senhaPlana: string;
  senhaConfirmar: string;
  role: Role;

  constructor() {}
}
