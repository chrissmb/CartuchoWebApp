import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-assync-spinner',
  templateUrl: './assync-spinner.component.html',
  styleUrls: ['./assync-spinner.component.css']
})
export class AssyncSpinnerComponent implements OnInit {

  poolRequisition: number[] = [];

  constructor() { }

  ngOnInit(): void {}

  showSpinner() {
    this.poolRequisition.push(1);
  }

  closeSpinner() {
    this.poolRequisition.pop();
  }

  isShow(): boolean {
    return this.poolRequisition && this.poolRequisition.length > 0;
  }
}
