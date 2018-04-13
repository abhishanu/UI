//Application level services 
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonService {
  private showModalHandler = new Subject<any>();
  showModal$ = this.showModalHandler.asObservable();
  public showAlertHandler = new Subject<any>();

  public breadCrumbHandler = new Subject<any>();
  public mapOverlayHandler = new Subject<any>();
  public loginHandler = new Subject<any>();
  constructor() { }
  showModal(option) {
    this.showModalHandler.next(option);
  }
  showAlert(option) {
    this.showAlertHandler.next(option);
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