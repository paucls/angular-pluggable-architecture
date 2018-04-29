import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetHelloComponent } from './widget-hello.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WidgetHelloComponent],
  entryComponents: [WidgetHelloComponent],
  providers: [{
    provide: 'widget-hello',
    useValue: WidgetHelloComponent
  }]
})
export class WidgetHelloModule { }
