import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown.component';
import { FluidFontSizeDirective } from '../fluidFontSize/fluid-font-size.directive';

@NgModule({
  declarations: [
    CountdownComponent,
    FluidFontSizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountdownComponent
  ]
})
export class CountdownModule { }