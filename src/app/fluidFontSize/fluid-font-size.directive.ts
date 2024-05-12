import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[fluidFontSize]'
})
export class FluidFontSizeDirective {
  constructor(private el: ElementRef) {}

  @Input('fluidFontSizeMax') maxFontSize: number = 80;
  @Input('fluidFontSizeMin') minFontSize: number = 28;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setFluidFontSize();
  }

  ngOnInit() {
    this.setFluidFontSize();
  }

  private setFluidFontSize() {
    const element = this.el.nativeElement;
    element.style.fontSize = `clamp(${this.minFontSize}px, 4vw, ${this.maxFontSize}px)`;
  }
}
