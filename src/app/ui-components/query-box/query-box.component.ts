import { Component, OnInit, Input, HostListener, 
    ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'query-box',
  templateUrl: './query-box.component.html',
  styleUrls: ['./query-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: QueryBoxComponent,
      multi: true,
    }
  ],
})
export class QueryBoxComponent implements OnInit {
  @Input() items: any[];
  @Input() itemValue: any;
  @Input() itemLabel: (item) => string | string;
  @Input() label: string;
  @Input() mw = 12;
  @Input() dw = 6;
  @Input() msgValidate: String[];

  @ViewChild('inputText') inputText: ElementRef<HTMLInputElement>;
  @ViewChild('resultList') resultList: ElementRef<HTMLDivElement>;

  private innerValue: any;
  onChange: (_) => void;
  onTouched: () => void;

  largura: number;
  mobWidth = 600;
  
  showItems = false;
  clickedIn = false;
  changed = false;
  inputValue = "";
  itemsSorted = [];
  itemsFiltered = [];
  itemSelected = -1;
  timeFocusLost: number;

  constructor(){}

  ngOnInit() {
    this.responsividade(window.innerWidth);
    this.resetItemsFiltered();
  }

  get value() {
    return this.innerValue;
  }

  set value(v) {
    if (this.innerValue != v) {
      this.innerValue = v;
      this.onChange(v);
      this.inputValue = this.getItemLabel(v);
    }
  }

  onBlur() {
    this.onTouched();
  }

  writeValue(obj) {
    if (this.innerValue != obj) 
      this.innerValue = obj;
      this.inputValue = this.getItemLabel(obj);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  isObject(item): boolean {
    return typeof item == "object" && this.itemLabel != null;
  }

  getItemValue(item): any {
    if (this.isObject(item) && this.itemValue != null) {
      return item[this.itemValue];
    } else {
      return item;
    }
  }

  getItemLabel(item): string {
    if (item == null) return '';
    if (this.isObject(item)) {
      if (typeof this.itemLabel == 'string') {
        return item[this.itemLabel];
      } else {
        return this.itemLabel(item);
      }
        
    } else {
      return item;
    }
  }

  getMsgValidate() {
    if (this.hasError()) {
      return this.msgValidate.join('\n');
    } else {
      return '';
    }
  }

  hasError(): boolean {
    return this.msgValidate != null && this.msgValidate.length > 0;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.responsividade(window.innerWidth);
  }

  responsividade(w) {
    let eMobile = w <= this.mobWidth;
    let cols = eMobile? this.mw : this.dw;
    this.largura = 100 / 12 * cols;
  }

  @HostListener('document:click')
  clickOut() {
    if (!this.showItems || this.clickedIn) {
      this.clickedIn = false;
    } else {
      this.closeList();
    }
  }

  clickInInput() {
    this.clickedIn = true;
    this.focusIn();
  }

  clickInComponent() {
    if (this.timeFocusLost != null)
      clearTimeout(this.timeFocusLost);
  }

  focusIn() {
    this.showItems = true;
    this.changed = false;
    this.resetItemsFiltered();
  }

  focusOut() {
    this.timeFocusLost = setTimeout(() => this.closeListWithSelf(this), 500);
  }

  selectItem(item: any) {
    this.value = item;
  }

  filterItems(self) {
    if (self.inputValue == null || self.inputValue.trim().length == 0) {
      self.resetItemsFiltered();
      return;
    }
    self.itemsFiltered = [];
    for(let item of self.itemsSorted) {
      let strItem = self.getItemLabel(item).toUpperCase().trim();
      let strInput = self.inputValue.toUpperCase().trim();
      if (strItem.search(strInput) == 0) {
        self.itemsFiltered.push(item);
      }
    }
  }

  debounce(callback, wait) {
    let timerId = null;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => callback(...args, this), wait);
    }
  }

  filterItemsDebounce = this.debounce(this.filterItems, 600);

  sortItems() {
    if (this.items == null) return;
    this.itemsSorted = [...this.items];
    this.itemsSorted = this.itemsSorted.sort((a, b) => {
      return this.getItemLabel(a).localeCompare(this.getItemLabel(b));
    });
  }

  onEnter() {
    if (!this.changed) {
      this.closeList();
      return;
    }
    if ((this.inputValue == null || this.inputValue == '') && this.itemSelected < 0)
      this.value = null;
    else if (this.itemsFiltered == null || this.itemsFiltered.length == 0)
      this.inputValue = this.getItemLabel(this.innerValue);
    else if (this.itemSelected == -1)
      this.inputValue = this.getItemLabel(this.innerValue);
    else {
      this.value = this.itemsFiltered[this.itemSelected];
      this.itemSelected = -1;
    }
    this.closeList();
  }

  resetItemsFiltered() {
    this.sortItems();
    this.itemsFiltered = [...this.itemsSorted];
    this.itemsFiltered.unshift(null);
    this.itemSelected = -1;
  }

  closeList() {
    this.closeListWithSelf(this);
  }

  closeListWithSelf(self) {
    self.showItems = false;
    self.inputValue = this.getItemLabel(this.innerValue);
    self.inputText.nativeElement.blur();
  }

  digitou(event: KeyboardEvent) {
    if (event.key == 'Enter') {
      this.onEnter();
    } else if (event.key == "ArrowUp" || event.key == "ArrowDown") {
      this.changed = true;
      this.moveSelectItem(event.key);
    } else if (event.key != 'ArrowLeft'
        && event.key != 'ArrowRight'
        && event.key != 'Tab'
        && event.key != 'Shift') {
      console.log(event.key);
      this.changed = true;
      this.itemSelected = -1;
      this.filterItemsDebounce();
    }
  }

  moveSelectItem(key) {
    if (key == "ArrowUp") {
      if (this.itemSelected > 0)
        this.itemSelected --;
    } else {
      if (this.itemSelected < this.itemsFiltered.length - 1)
        this.itemSelected ++;
    }

    this.resultList.nativeElement.scrollTo(0, (this.itemSelected * 23.66) - 60);
  }
}