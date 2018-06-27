import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'left-nav',
  templateUrl: './left.nav.html'
})
export class LeftNavComponent {
  menuList: any = [];
  constructor(private _commonService: CommonService) {

  }

  ngOnInit() {
    
    this.menuList = [{
      "menuName": "Orders & Returns","menuType":"orders", "subMenus": [
        { "name": "Temple Donations History", "url": "temple-history" },
        { "name": "Pooja Services", "url": "pooja-service" },
        { "name": "Religious Tours", "url": "religious-tour" },
        { "name": "Pandit Bookings", "url": "pandit-booking" },
        { "name": "Others", "url": "others" }]
    },
    {
      "menuName": "Credits", "menuType":"credit","subMenus": [
        { "name": "Coupons", "url": "coupons" },
        { "name": "Reward Points", "url": "reward-points" },
        { "name": "Cashback", "url": "cashback" },
        { "name": "Refer & Earn", "url": "refer-earn" },
        { "name": "Wallet", "url": "wallet" }]
    },
    {
      "menuName": "WishList","menuType":"wishlist", "subMenus": [
        { "name": "Subscribe Temples", "url": "subscribe-temple" },
        { "name": "Notification Alerts", "url": "alerts" },
        { "name": "User Wishlist", "url": "wishlist" }]
    }, {
      "menuName": "Account","menuType":"account", "subMenus": [
        { "name": "Profile", "url": "profile" },
        { "name": "Saved Cards", "url": "cards" },
        { "name": "Addresses", "url": "addresses" },]
    }];

  }
  
  setCurrent($event, url,type) {
    document.querySelector(".left-menu .sub-menu li.active") ? document.querySelector(".left-menu .sub-menu li.active").classList.remove("active") : "";
    $event.target.parentElement.classList.add("active");  
     this._commonService.dashbordTab = type;  
    this._commonService.dashboardUpdate({
      type:type,
      currentMenu:url
    })
  }
}
