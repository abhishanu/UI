import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'pooja-service-listing',
  templateUrl: './pooja-service-listing.component.html'
})
export class PoojaServiceListingComponent implements OnInit {

   constructor(private _commonService: CommonService) {
    }

  ngOnInit() {
    this._commonService.updateBreadCrumb([
            {
                "path": "/pooja-services",
                "label": "Pooja Servces"
            },
            {
                "path": "",
                "label": "Pooja List"
            }
        ]);
  }

}
