import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-assync-spinner',
  templateUrl: './assync-spinner.component.html',
  styleUrls: ['./assync-spinner.component.css']
})
export class AssyncSpinnerComponent implements OnInit {

  show = false;

  constructor() { }

  ngOnInit(): void {}

  showSpinner() {
    this.show = true;
  }

  closeSpinner() {
    this.show = false;
  }
}
