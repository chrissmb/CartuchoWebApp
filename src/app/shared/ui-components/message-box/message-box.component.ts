import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';


@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css'],
})
export class MessageBoxComponent implements OnInit {

  color: string;
  message: string;
  title: string;
  @ViewChild('btnOk') btnOk: BtnComponent;
  @ViewChild('dialogModal') dialogModal: ElementRef<HTMLDialogElement>;

  constructor() {}

  ngOnInit() {}

  showModal() {
    this.dialogModal.nativeElement.showModal();
  }

  closeModal() {
    this.dialogModal.nativeElement.close();
  }
}
