import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { RequestService } from '../../services/request.service';
@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html'
})
export class CartDetailComponent implements OnInit {
heading:any="";
options:any;
orderList:any=[
  {
    "number":"1075511-0491073-4066503",
    "URL":"/temple-donation",
    "Image_Path":"images/3.jpg",
    "title":"Badrinath Temple",
    "donationType":"Food Donation",
    "donationAmount":"10000",
    "status":"declined",
    "date":"Apr 16, 2018",
    "total":"11000"
  },
  {
    "number":"1075511-0491073-4066503",
    "URL":"/temple-donation",
    "Image_Path":"images/4.jpg",
     "title":"Badrinath Temple",
    "donationType":"Temple Needs",
    "donationAmount":"90000",
    "status":"success",
    "date":"Mar 16, 2018",
    "total":"89913",
    "cashback":"87"
  },
  {
    "number":"1075511-0491073-4066503",
    "URL":"/temple-donation",
    "Image_Path":"images/2.jpg",
     "title":"kashi vishwanath",
    "donationType":"Construction",
    "donationAmount":"50000",
    "status":"inprogress",
    "date":"Apr 06, 2018",
    "total":"45000"
  }
]
  constructor(private _commonService: CommonService,private _requestService:RequestService) { }

  ngOnInit() {
    this._commonService.ordersHandler.subscribe(options => {
      this.options = options;
      this.heading = this.options.currentMenu =='temple-history' ? "Temple Donation History Details" : this.options.currentMenu =='pooja-service' ? "Pooja Service Order Details" : this.options.currentMenu =='religious-tour' ? "Religious Tour Detail" : this.options.currentMenu =='pandit-booking' ? "Pandit Booking Details" : "Other Orders Details"; 
    });
   // this.heading = this._commonService.currentMenu =='temple-history' ? "Temple Donation History Details" : this._commonService.currentMenu =='pooja-service' ? "Pooja Service Order Details" : this._commonService.currentMenu =='religious-tour' ? "Religious Tour Detail" : this._commonService.currentMenu =='pandit-booking' ? "Pandit Booking Details" : "Other Orders Details"; 
  }

}
