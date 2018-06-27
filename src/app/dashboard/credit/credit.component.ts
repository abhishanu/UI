import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'credit-detail',
  templateUrl: './credit.component.html'
})
export class CreditComponent implements OnInit {
  options: any;
  heading:any;
  data:any=[{
    "discount":"20%",
    "min":"1799",
    "code":"WONDERHRA20",
    "expiryDate":"APR 20, 2018",
    "expiryTime":"03:00:00 P.M"
  },{
    "discount":"10%",
    "min":"799",
    "code":"WONDERHRA10",
    "expiryDate":"APR 27, 2018",
    "expiryTime":"01:00:00 P.M"
  },{
    "discount":"25%",
    "min":"2499",
    "code":"WONDERHRA25",
    "expiryDate":"APR 10, 2018",
    "expiryTime":"05:00:00 P.M"
  },{
    "discount":"10%",
    "min":"499",
    "code":"WONDERHRA10",
    "expiryDate":"APR 29, 2018",
    "expiryTime":"03:00:00 P.M"
  }];
  constructor(private _commonService: CommonService, private _requestService: RequestService) { }
  ngOnInit() {
    this._commonService.creditHandler.subscribe(options => {
      this.options = options;
      this.heading = this.options.currentMenu;
    });
  }
}
