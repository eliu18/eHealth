import { Directive, ElementRef, Input, HostListener, Renderer2, Self } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  @HostListener('keyup', ['$event']) newKey(e: KeyboardEvent) {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
      const input = this.el.nativeElement.value += e.key.toUpperCase();
      e.preventDefault();

      /* var evt = document.createEvent("HTMLEvents");
      evt.initEvent("input", false, true);
      event.target.dispatchEvent(evt); */

      // this.renderer.setProperty(this.el.nativeElement, 'value', input);
    }
  }
}
