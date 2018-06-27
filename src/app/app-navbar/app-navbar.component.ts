import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../services/request.service';
import { CommonService } from '../services/common.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  liveFeedsItems: any;
  selected: any;
  menuItems: any;
  citiList: any = [];
  isOpenCityList: boolean; false;
  constructor(private router: Router, private _requestService: RequestService, private _commonService: CommonService) {
    this._requestService.fetchData("getAllHomeMenuTabs").subscribe(data => {

      this.menuItems = data.json();
    }, err => {
      this._commonService.showHttpErrorMsg();
    });
    this._requestService.fetchData("getAllCities").subscribe(data => {
      this._commonService.completeCitilist = data.json();
      this.citiList = this._commonService.completeCitilist;
    }, err => {
      this._commonService.showHttpErrorMsg();
    })
  }
  changeCity() {
    this.isOpenCityList = !this.isOpenCityList;
    this.selected = "";
  }
  openLoginPopup() {
    this._commonService.openLogin();
  }
  selectCity(e: TypeaheadMatch): void {
    console.log('Selected value: ', e.value);
    this.isOpenCityList = !this.isOpenCityList;
    this._commonService.currentCity = e.value;
  }
  ngOnInit() {
    this.liveFeedsItems = [
      {
        "poster": "../assets/videos/video-1.jpg",
        "desc": "Mahabaleshwar Temple"
      },
      {
        "poster": "../assets/videos/video-2.jpg",
        "desc": "Ramaswamy Temple"
      }, {
        "poster": "../assets/videos/video-3.jpg",
        "desc": "Jagannath Temple"
      }, {
        "poster": "../assets/videos/video-4.jpg",
        "desc": "Sri Ranganathaswamy Temple"
      }
    ];
    
  }
   ngAfterViewInit() {
   setTimeout(()=> { var frames = (document.querySelector("iframe.skiptranslate") as any);
    var style = document.createElement("style");
    var t = document.createTextNode(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div{color:black}.goog-te-menu2-item div:hover, .goog-te-menu2-item:link div:hover, .goog-te-menu2-item:visited div:hover, .goog-te-menu2-item:active div:hover{background:gray;color:#ffffff}")
    style.appendChild(t);
    frames.contentDocument.head.appendChild(style);
   },1500);
        //  this.carouselTileItems = this.carouselItems;
    }
  searchText(e) {
    let keycode = e.keycode || e.which;

    if (keycode == 13) {
      this.router.navigate(['search-result', e.target.value]);
    }
  }
  cart() {
    this.router.navigate(['user-cart']);
  }
  openSearch(e) {
    let parentElem = e.target.parentElement;
    let nextElem = parentElem.nextElementSibling;
    if (nextElem.classList.contains("display-flex")) {
      nextElem.classList.remove("display-flex");
    }
    else {
      nextElem.classList.add("display-flex");
    }
  }
  openSideMenu(e) {
    let parentElem = e.target.parentElement.parentElement;
    let nextElem = parentElem.nextElementSibling;
    if (nextElem.classList.contains("mobile-menu") && nextElem.classList.contains("hide-on-body")) {
      nextElem.classList.remove("mobile-menu", "hide-on-body", "hide-elem");
    }
    else {
      nextElem.classList.add("mobile-menu", "hide-on-body");
      nextElem.classList.remove("hide-elem");
    }
  }
}
function extend(obj, src) {
  for (var key in src) {
    if (src.hasOwnProperty(key)) obj[key] = src[key];
  }
  return obj;
}