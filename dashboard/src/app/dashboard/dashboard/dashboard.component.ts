import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.loadWidgets();
  }

  private loadWidgets() {
    this.dashboardService.getWidgets().subscribe((widgets) => {
      widgets.forEach((widget) => console.log(widget));
    });
  }

}
