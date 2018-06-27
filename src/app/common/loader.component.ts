import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommonService } from '../services/common.service';
@Component({
    selector: 'loader',
    template: `
    <div class="loaderWrap" *ngIf="loading">
    <div class="loaderOverlay"><h2>Loading Data <span>.</span><span>.</span><span>.</span></h2></div>
</div>

  `
})
export class LoaderComponent{
  private showSub :any;
   private hideSub :any;
  private loading: boolean = false;
  constructor(private _commonService:CommonService) { }
 
  ngOnInit() {
    this.showSub = this._commonService.showLoader$.subscribe((res) => {
      this.loading = true;
    });
    this.hideSub = this._commonService.hideLoader$.subscribe((res) => {
      this.loading = false;
    });
  }
 
}
