import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { RequestService } from '../../services/request.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

   constructor(private _commonService: CommonService, private _requestService: RequestService) {
    
  }

  ngOnInit() {
    this._commonService.updateBreadCrumb([]);
  }

}
