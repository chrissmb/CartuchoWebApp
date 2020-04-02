import { Component, OnInit, ContentChildren, QueryList,
    ElementRef, AfterContentInit, Input } from '@angular/core';

@Component({
  selector: 'ui-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {

  @ContentChildren('tab') divTabs: QueryList<ElementRef<HTMLDivElement>>;
  @Input() type: string;
  tabs: String[];
  activeTab = 0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.tabs = [];
    this.divTabs.forEach(div => this.tabs.push(div.nativeElement.getAttribute("tab")));
    this.setActiveTab(0);
  }

  setActiveTab(index: number) {
    this.activeTab = index;
    this.divTabs.forEach((div, i) => {
      if (i == this.activeTab)
        div.nativeElement.style.display = 'block';
      else
        div.nativeElement.style.display = 'none';
    });
  }

  isActiveTab(index: number) {
    return index == this.activeTab;
  }

}
