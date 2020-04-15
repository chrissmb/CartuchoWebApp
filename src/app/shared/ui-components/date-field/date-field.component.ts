import { Component, OnInit, Input, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl} from '@angular/forms';

@Component({
  selector: 'ui-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DateFieldComponent,
      multi: true,
    }
  ],
})
export class DateFieldComponent implements OnInit, ControlValueAccessor {

  @Input() label: string;
  @Input() mw = 12;
  @Input() dw = 6;
  @Input() placeholder = '';
  @Input() msgValidate: String[];

  private innerValue: Date;
  private onChange: (_) => void;
  private onTouched: () => void;

  largura: number;
  mobWidth = 600;

  constructor() { }

  ngOnInit() {
    this.responsividade(window.innerWidth);
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

  get value() {
    return this.getDateFormatted();
  }

  set value(v) {
    let date = null;
    if (v != null && v !== '') {
      date = new Date(v + 'T00:00:00.000');
    }
    if (this.innerValue != date) {
      this.innerValue = date;
      this.onChange(date);
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

  getDateFormatted(): string {
    if (this.innerValue == null || isNaN(this.innerValue.getTime())) {
      return null;
    }
    return this.innerValue.toISOString().slice(0, 10);
  }

}
