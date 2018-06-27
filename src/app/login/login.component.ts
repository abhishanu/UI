import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { RequestService } from '../services/request.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  isPopup: any = false;
  signUp: any = {};
  signIn: any = {};
  params: any;
  constructor(private _CommonService: CommonService, private _requestService: RequestService) { }

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
  userSignUp() {
    this.params = {
      "requestType": "signUp",
      "requestParam": this.signUp
    };
    this._requestService.postData("userSignUp", this.params).subscribe(data => {
      this._CommonService.hideLoader();
      if (data.json().status == "ERROR") {
        this._CommonService.showAlert({
          type: "danger", msg: data.json().response
        });

        this.closePopup();
        this.signUp = {};
      }
      else {
        this._CommonService.showAlert({
          type: "success", msg: 'User successfully sign up, please verify your email id / mobile number to login.'
        });
        this.closePopup();
        this.signUp = {};
      }
    }, err => {
      this._CommonService.showHttpErrorMsg();
    });
  }
  userSignIn() {
    this.params = {
      "requestType": "login",
      "requestParam": this.signIn
    };
    this._requestService.postData("login", this.params).subscribe(data => {
      this._CommonService.hideLoader();
      let dataItem = data.json();
      if (dataItem.status == "ERROR") {
        this._CommonService.showAlert({
          type: "danger", msg: dataItem.response
        });

        this.closePopup();
        this.signIn = {};
      }
      else {
        this._CommonService.userName = dataItem.response.firstName+" "+dataItem.response.lastName;
        this.closePopup();
        this.signIn = {};
      }
    }, err => {
      this._CommonService.showHttpErrorMsg();
    });
  }
}
