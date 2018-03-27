import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent{ 
    
  private title:any;
  private mainBody:any;
  private isModalOpen: boolean = false;
  constructor(private _commonService:CommonService) { }

  ngOnInit() {
    this._commonService.showModal$.subscribe((res) => {
        this.title = res.title;
        this.mainBody = res.mainBody;
      this.isModalOpen = true;
    });
    
  }
closeModal(){
    this.isModalOpen = false;
}
}
