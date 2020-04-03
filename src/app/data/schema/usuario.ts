import { Role } from './role';
export interface Usuario {
  id?: number;
  username: string;
  password?: string; // hash
  senha?: string; // texto plano
  senhaAtual?: string; // usado para conferir senha atual na alterção
  role: Role;
}
