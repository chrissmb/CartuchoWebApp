import { Component, OnInit, Input, TemplateRef,
  Renderer2, ElementRef, ViewContainerRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, 
  FormControl, SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ComboBoxComponent,
      multi: true,
    },
    {
      provide: SelectControlValueAccessor,
      useExisting: ComboBoxComponent,
    }
  ],
})
export class ComboBoxComponent extends SelectControlValueAccessor implements OnInit {

  @Input() items: any[];
  @Input() itemValue: any;
  @Input() itemLabel: (item) => string | string;
  @Input() label: string;
  @Input() mw = 12;
  @Input() dw = 6;
  @Input() msgValidate: String[];

  private innerValue: any;
  onChange: (_) => void;
  onTouched: () => void;

  largura: number;
  mobWidth = 600;

  constructor(
    private renderer: Renderer2, 
    private elementRef: ElementRef,
  ) {
    super(renderer, elementRef);
  }

  ngOnInit() {
    this.responsividade(window.innerWidth);
  }

  get value() {
    return this.innerValue;
  }

  set value(v) {
    if (this.innerValue != v) {
      this.innerValue = v;
      this.onChange(v);
    }
  }

  onBlur() {
    this.onTouched();
  }

  writeValue(obj) {
    if (this.innerValue != obj) 
      this.innerValue = obj;
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
    if (item == null) return null;
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
}