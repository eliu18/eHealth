import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColorHoverButton]'
})
export class ColorHoverButtonDirective {

  constructor() { }

  @HostBinding('style.background-color') bgColor: any;

  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = '#006169';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = '#0099a5';
  }

}
