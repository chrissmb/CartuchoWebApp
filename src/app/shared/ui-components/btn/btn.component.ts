import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  @Input() type: string;
  @Input() disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
