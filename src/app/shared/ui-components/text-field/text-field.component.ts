import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl} from '@angular/forms';

@Component({
  selector: 'ui-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextFieldComponent,
      multi: true,
    }
  ],
})
export class TextFieldComponent implements OnInit, ControlValueAccessor {

  @Input() label: string;
  @Input() mw = 12;
  @Input() dw = 6;
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() msgValidate: string[];
  @Input() maxlength: number;
  @Input() minlength: number;

  largura: number;
  mobWidth = 600;

  private innerValue;
  private onChange: (_) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {}

  ngOnInit() {
    this.responsividade(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.responsividade(window.innerWidth);
  }

  responsividade(w) {
    const eMobile = w <= this.mobWidth;
    const cols = eMobile ? this.mw : this.dw;
    this.largura = 100 / 12 * cols;
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
    if (this.innerValue != obj) {
      this.innerValue = obj;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
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
}
