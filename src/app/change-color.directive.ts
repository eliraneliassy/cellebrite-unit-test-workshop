import { Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'backgroundColor', 'red');
  }

}
