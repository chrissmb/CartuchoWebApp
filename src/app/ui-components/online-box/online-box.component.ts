import { Component, OnInit, Input, Output, HostListener, 
    EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'online-box',
  templateUrl: './online-box.component.html',
  styleUrls: ['./online-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: OnlineBoxComponent,
      multi: true,
    }
  ],
})
export class OnlineBoxComponent implements OnInit {

  @Input() items: any[];
  @Input() itemValue: any;
  @Input() itemLabel: (item) => string | string;
  @Input() label: string;
  @Input() mw = 12;
  @Input() dw = 6;
  @Input() msgValidate: String[];
  @Output() refreshList = new EventEmitter();

  @ViewChild('inputText') inputText: ElementRef<HTMLInputElement>;
  @ViewChild('resultList') resultList: ElementRef<HTMLDivElement>;

  private innerValue: any;
  onChange: (_) => void;
  onTouched: () => void;

  largura: number;
  mobWidth = 600;
  
  clickedIn = false;
  changed = false;
  inputValue = "";
  itemSelected = -1;
  timeFocusLost: number;

  constructor(){}

  ngOnInit() {
    this.responsividade(window.innerWidth);
  }

  get value() {
    return this.getItemValue(this.innerValue);
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
    if (!this.containItems || this.clickedIn) {
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
    this.changed = false;
  }

  focusOut() {
    this.timeFocusLost = setTimeout(() => this.closeListWithSelf(this), 500);
  }

  selectItem(item: any) {
    this.value = item;
  }

  debounce(callback, wait) {
    let timerId = null;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => callback(...args, this), wait);
    }
  }

  onEnter() {
    if (!this.changed) {
      this.closeList();
      return;
    }
    if ((this.inputValue == null || this.inputValue == '') && this.itemSelected < 0)
      this.value = null;
    else if (!this.containItems() || this.itemSelected == -1)
      this.inputValue = this.getItemLabel(this.innerValue);
    else {
      this.value = this.items[this.itemSelected];
      this.itemSelected = -1;
    }
    this.closeList();
  }

  closeList() {
    this.closeListWithSelf(this);
  }

  closeListWithSelf(self) {
    self.items = [];
    self.inputValue = this.getItemLabel(this.innerValue);
    if (self.inputText != null) {
      self.inputText.nativeElement.blur();
    }
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
      this.changed = true;
      this.itemSelected = -1;
      this.emitRefreshListDebounce();
    }
  }

  emitRefreshList(self) {
    self.showItems = false;
    if (self.inputValue != null && self.inputValue.length > 0) {
      self.showItems = true;
      self.refreshList.emit(self.inputValue);
    }
      
  }

  emitRefreshListDebounce = this.debounce(this.emitRefreshList, 1000);

  moveSelectItem(key) {
    if (key == "ArrowUp") {
      if (this.itemSelected > 0)
        this.itemSelected --;
    } else {
      if (this.itemSelected < this.items.length - 1)
        this.itemSelected ++;
    }

    if (this.resultList != null) {
      this.resultList.nativeElement.scrollTo(0, (this.itemSelected * 23.66) - 60);
    }
  }

  containItems(): boolean {
    return this.items != null && this.items.length > 0;
  }
}