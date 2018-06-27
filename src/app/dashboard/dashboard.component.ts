import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  constructor(private _commonService: CommonService) { }

  ngOnInit() {    
    this._commonService.dashbordTab = "orders";
    this._commonService.dashboardUpdate({
      type: "orders",
      currentMenu: "temple-history"
    });

  }

}
