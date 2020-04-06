import { Injectable } from '@angular/core';
import { MessageBoxService } from '../../shared/ui-components/message-box/message-box.service';

@Injectable({
  providedIn: 'root',
  deps: [MessageBoxService]
})
export class ErroService {

  constructor(private msgBoxService: MessageBoxService) {}

  trataErro(erro: any) {
    console.error(erro);
    const mensagem = erro && erro.error && erro.error.mensagem;
    this.msgBoxService.showMessage(mensagem || 'Erro desconhecido.', 'Erro');
  }
}
