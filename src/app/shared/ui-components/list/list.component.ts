import { Component, OnInit, Input, AfterContentChecked,
    ContentChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'ui-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() type: string;
  @ContentChildren('block') blocks: QueryList<ElementRef<HTMLElement>>;

  constructor() {}

  ngOnInit() {}

  ngAfterContentChecked() {
    this.blocks.forEach( block => {
      let width = block.nativeElement.getAttribute("block");
      block.nativeElement.style.width = (100 / 12) * parseInt(width) + '%';
    });
  }

}
