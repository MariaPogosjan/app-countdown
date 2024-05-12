import { FluidFontSizeDirective } from './fluid-font-size.directive';
import { ElementRef } from '@angular/core';

describe('FluidFontSizeDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = { nativeElement: {} } as ElementRef;
    const directive = new FluidFontSizeDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});