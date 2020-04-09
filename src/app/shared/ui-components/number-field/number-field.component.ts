import { Component, OnInit, ViewChild, ElementRef,
    Input, HostListener, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl} from '@angular/forms';

@Component({
  selector: 'ui-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumberFieldComponent,
    multi: true,
  }],
})
export class NumberFieldComponent implements OnInit, ControlValueAccessor {

  @Input() decimalLength = 0;
  @Input() label: string;
  @Input() mw = 12;
  @Input() dw = 6;
  @Input() placeholder: string;
  @Input() msgValidate: string[];
  @Input() max: number;
  @Input() min: number;
  @Input() required = false;
  @Input() disabled = false;
  @Input() name: string;

  @Output() numberValue = new EventEmitter();

  @ViewChild('numberInput') numberInput: ElementRef<HTMLInputElement>;

  private innerValue: number;
  private onChange: (_) => void;
  private onTouched: () => void;

  largura: number;
  mobWidth = 600;

  constructor() { }

  ngOnInit() {
    this.responsividade();
  }


  writeValue(obj: any): void {
    if (this.innerValue != obj) {
      this.innerValue = Number(obj);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onBlur() {
    this.onTouched();
  }

  get value() {
    return this.innerValue;
  }

  set value(v) {
    let value = Number(v);
    if (this.innerValue != value) {
      if (value == null) {
        value = 0;
      }
      this.innerValue = value;
      this.onChange(value);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.responsividade();
  }

  responsividade() {
    const eMobile = window.innerWidth <= this.mobWidth;
    const cols = eMobile ? this.mw : this.dw;
    this.largura = 100 / 12 * cols;
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
