import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-todays-date',
  template: `
  <div>
    {{currentDate | date}}
  </div>
  `
})
export class WidgetTodaysDateComponent implements OnInit {

  currentDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
