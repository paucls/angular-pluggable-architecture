import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetQuotesComponent } from './widget-quotes.component';
import { QuotesService } from './quotes.service';

@NgModule({
  imports: [CommonModule],
  declarations: [WidgetQuotesComponent],
  entryComponents: [WidgetQuotesComponent],
  providers: [
    {
      provide: 'widget-quotes',
      useValue: WidgetQuotesComponent
    },
    QuotesService
  ]
})
export class WidgetQuotesModule { }
