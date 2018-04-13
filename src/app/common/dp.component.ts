import { Component,ViewChild } from '@angular/core';
 import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'date-picker',
  template: `
     <div class="col-xs-12 col-12 col-md-5 col-lg-5 form-group">
    <div class="form-group">
      <div class="input-group">
        <input type="text" class="form-control" bsDatepicker #dp="bsDatepicker" [bsConfig]="bsConfig">
        <div class="input-group-btn">
          <button class="btn btn-success" (click)="dp.show() ">Open</button>
        </div>
      </div>
    </div>
  </div>
  `
})
export class DatePickerComponent {
    @ViewChild('dp') dp: any;
    colorTheme = 'theme-green';
    bsConfig: Partial<BsDatepickerConfig>;
    
   ngOnInit() {
       this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
       this.dp.show()
   }

}