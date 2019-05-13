import { Directive, ElementRef, Input, SimpleChanges, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {
  // @Input() appUppercase: boolean;
  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', ['$event']) newKey(e: KeyboardEvent) {
    // e.preventDefault();
    if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
      this.el.nativeElement.value += e.key.toUpperCase();
    }
  }

  /* toUpperCase(value: any) {
    if (this.appUppercase) {
      this.el.nativeElement.value = value.toUpperCase();
    }
  } */

}
