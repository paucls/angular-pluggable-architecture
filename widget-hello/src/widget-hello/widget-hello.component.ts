import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-hello',
  template: `
  <div>
    <h3>Hello World!</h3>
  </div>
  `
})
export class WidgetHelloComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
