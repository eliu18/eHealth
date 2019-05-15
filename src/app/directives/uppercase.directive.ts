import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  @HostListener('keydown', ['$event']) newKey(e: KeyboardEvent) {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
      e.preventDefault();
      const input = this.el.nativeElement.value += e.key.toUpperCase();
      this.renderer.setProperty(this.el.nativeElement, 'value', input);
    }
  }
}
