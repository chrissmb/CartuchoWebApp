import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @Input() color: string;
  @Input() size = 25;

  constructor() { }

  ngOnInit() {
  }
}
