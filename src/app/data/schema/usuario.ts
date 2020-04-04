import { Role } from './role';
export interface Usuario {
  id?: number;
  login: string;
  senhaPlana?: string;
  senhaConfirmar?: string;
  role?: Role;
}
