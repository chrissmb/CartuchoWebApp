import { DOCUMENT } from '@angular/common';
import { AfterViewChecked, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';


@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit, AfterViewChecked{

  color: string;
  show = false;
  message: string;
  title: string;
  @ViewChild('btnOk') btnOk: BtnComponent;

  constructor(@Inject(DOCUMENT) private document: HTMLDocument) {}

  ngAfterViewChecked(): void {
    this.btnOk.btnElement.nativeElement.focus();
  }

  ngOnInit() {}

  showModal() {
    this.show = true;
    this.document.body.style.overflow = 'hidden';
    this.btnOk.btnElement.nativeElement.focus();
  }

  closeModal() {
    this.show = false;
    this.document.body.style.overflow = 'auto';
  }
}
