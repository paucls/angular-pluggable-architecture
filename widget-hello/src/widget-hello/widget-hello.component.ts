import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-hello',
  template: `
  <div class="card">
    <div class="card-block">
      <h3>Hello World!</h3>
    </div>
  </div>
  `
})
export class WidgetHelloComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
