import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-todays-date',
  template: `
  <div class="card">
    <div class="card-block">
      {{currentDate | date}}
    </div>
  </div>
  `
})
export class WidgetTodaysDateComponent implements OnInit {

  currentDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
