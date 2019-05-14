import { Directive, ElementRef, Input, SimpleChanges, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {
  // @Input() appUppercase: boolean;
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('keydown', ['$event']) newKey(e: KeyboardEvent) {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122) || e.keyCode === 13) {
      e.preventDefault();
      let inputValue;
      if (e.keyCode != 13) {
        inputValue = this.el.nativeElement.value += e.key.toUpperCase();
      }
      console.log(this.el.nativeElement.value);
      console.log(this.renderer)
      this.renderer.setProperty(this.el.nativeElement, 'value', inputValue);
    }
  }


  /* toUpperCase(value: any) {
    if (this.appUppercase) {
      this.el.nativeElement.value = value.toUpperCase();
    }
  } */

}
