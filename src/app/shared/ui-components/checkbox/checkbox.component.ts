import { Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { CheckboxControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true,
    }
  ],
})
export class CheckboxComponent extends CheckboxControlValueAccessor implements OnInit {

  @Input() label: string;
  @Input() mw = 12;
  @Input() dw = 6;
  @Input() disabled = false;

  private innerValue;
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
}
