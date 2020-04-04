import { Component, OnInit, Input, Output, EventEmitter, Inject, ComponentRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MessageBoxService } from './message-box.service';


@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  @Input() color: string;
  show = false;
  modalRef: ComponentRef<MessageBoxComponent>;
  message: string;
  title: string;

  constructor(@Inject(DOCUMENT) private document: HTMLDocument) {}

  ngOnInit() {}

  showModal() {
    this.show = true;
    this.document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.show = false;
    this.document.body.style.overflow = 'auto';
  }
}
