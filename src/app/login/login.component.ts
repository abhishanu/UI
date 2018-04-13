import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service'
@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
isPopup:any=false;
 constructor(private _CommonService:CommonService) { }

  ngOnInit() {
    this._CommonService.loginHandler.subscribe(options => {
      this.isPopup = true;
     document.querySelector("body").classList.add("body-overflow-hide");
    });
  }
  closePopup() {
    document.querySelector("body").classList.remove("body-overflow-hide");
    this.isPopup = false;
  }
}
