import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() color: string;
  show = false;

  constructor(@Inject(DOCUMENT) private document: HTMLDocument) { }

  ngOnInit() {}

  showModal() {
    this.show = true;
    this.document.body.style.overflow = "hidden";
  }

  closeModal() {
    this.show = false;
    this.document.body.style.overflow = "auto";
  }

}