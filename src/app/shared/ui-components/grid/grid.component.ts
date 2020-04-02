import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ui-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() type: string;

  constructor() {}

  ngOnInit() {

  }

}
