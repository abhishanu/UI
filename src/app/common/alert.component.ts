import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {CommonService} from '../services/common.service';
 
@Component({
  selector: 'app-alert',
  template: `
    <div *ngFor="let alert of alerts">
        <alert [type]="alert.type" [dismissOnTimeout]="5000" [dismissible]=dismissible>{{alert.msg}}</alert>
      </div>
  `
})
export class AlertComponent {
  private dismissible:any = true;
  private alerts: any = [];
  constructor(private _commonService:CommonService) { }
  ngOnInit() {
    this._commonService.showAlert$.subscribe((res) => {
        this.alerts.push({
          type:res.type,
          msg:res.msg
        });
    });    
  }  
}