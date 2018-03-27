import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {
options:any;
  constructor(private _CommonService: CommonService) { }

  ngOnInit() {
    this._CommonService.breadCrumbHandler.subscribe(options => {
      this.options = options;
    });
  }

}
