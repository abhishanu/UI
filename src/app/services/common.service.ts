//Application level services 
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonService {
  private showModalHandler = new Subject<any>();
  showModal$ = this.showModalHandler.asObservable();
  public dashbordTab:any;
  private showLoaderHandler = new Subject<any>();
  showLoader$ = this.showLoaderHandler.asObservable();
  currentCity:any="Amritsar";

  private hideLoaderHandler = new Subject<any>();
  hideLoader$ = this.hideLoaderHandler.asObservable();

  public showAlertHandler = new Subject<any>();
  public breadCrumbHandler = new Subject<any>();
  public ordersHandler = new Subject<any>();
  public creditHandler = new Subject<any>();
  public wishlistHandler = new Subject<any>();
  public accountHandler = new Subject<any>();
  public mapOverlayHandler = new Subject<any>();
  public loginHandler = new Subject<any>();
  public completeCitilist:any=[];
  public userName="MY ACCOUNT";
  constructor() { }
  showModal(option) {
    this.showModalHandler.next(option);
  }
  showLoader() {
    this.showLoaderHandler.next();
  }
  hideLoader() {
    this.hideLoaderHandler.next();
  }
  showAlert(option) {
    this.showAlertHandler.next(option);
  }
  dashboardUpdate(option){
    if(option.type =='orders'){
      this.ordersHandler.next(option);
    }
    
    else if(option.type =='credit'){
      this.creditHandler.next(option);
    }
    
   else if(option.type =='wishlist'){
      this.wishlistHandler.next(option);
    }
    
    else {
      this.accountHandler.next(option);
    }
  }
  updateBreadCrumb(option) {
    this.breadCrumbHandler.next(option);
  }
  openMapOverlay(option) {
    this.mapOverlayHandler.next(option);
  }
  showHttpErrorMsg() {
    this.showAlert({
      "type": "danger",
      "msg": "Oops! Something went wrong while getting data from server."
    })

  }
  openLogin() {
    this.loginHandler.next();
  }
}