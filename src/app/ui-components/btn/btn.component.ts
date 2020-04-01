import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  @Input() type = "";

  constructor() { }

  ngOnInit() {
  }

}