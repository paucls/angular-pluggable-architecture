import { Component, OnInit } from '@angular/core';
import { QuotesService } from './quotes.service';

@Component({
  selector: 'widget-quotes',
  template: `
  <div class="card">
    <div class="card-block">
      <div class="card-title">
        widget-quotes
      </div>
      <div class="card-text">
        ...
      </div>
    </div>
  </div>
  `
})
export class WidgetQuotesComponent implements OnInit {

  constructor(private quotesService: QuotesService) { }

  ngOnInit() { }

}
