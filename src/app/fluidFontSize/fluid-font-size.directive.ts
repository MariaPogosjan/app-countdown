import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[fluidFontSize]'
})
export class FluidFontSizeDirective {
  constructor(private el: ElementRef) {}

  @Input('fluidFontSize') fontSizeRange: string = '';
  minFontSize: number | undefined;
  maxFontSize: number | undefined;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setFluidFontSize();
  }

  ngOnInit() {
    const [min, max] = this.fontSizeRange.split(',').map(Number);
    this.minFontSize = min || 28;
    this.maxFontSize = max || 80;
    this.setFluidFontSize();
  }

  private setFluidFontSize() {
    const element = this.el.nativeElement;
    console.log(element);
    element.style.fontSize = `clamp(${this.minFontSize}px, 4vw, ${this.maxFontSize}px)`;
  }
}
