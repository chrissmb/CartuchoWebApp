import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable } from '@angular/core';
import { MessageBoxComponent } from './message-box.component';

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {

  divContainer: HTMLDivElement;
  msgBoxFactory: ComponentFactory<MessageBoxComponent>;
  msgBoxComponentRef: ComponentRef<MessageBoxComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
  ) {
    this.msgBoxFactory = this.componentFactoryResolver.resolveComponentFactory(MessageBoxComponent);
  }

  showMessage(message: string, title: string, color?: string) {
    if (this.msgBoxComponentRef == null) {
      this.divContainer = document.createElement('div');
      document.body.appendChild(this.divContainer);
      this.msgBoxComponentRef = this.appRef.bootstrap(this.msgBoxFactory, this.divContainer);
    }
    this.msgBoxComponentRef.instance.message = message;
    this.msgBoxComponentRef.instance.title = title;
    if (color != null && color !== '') {
      this.msgBoxComponentRef.instance.color = color;
    }
    this.msgBoxComponentRef.instance.showModal();
  }

  closeModal() {
    this.msgBoxComponentRef.destroy();
  }
}
