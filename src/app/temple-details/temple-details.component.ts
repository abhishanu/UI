import { Component, OnInit} from '@angular/core';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'temple-details',
  templateUrl: './temple-details.component.html'
})
export class TempleDetailsComponent implements OnInit {
  private templeDetails:any;
  constructor(private _commonService: CommonService) { }
 
  
  ngOnInit() {
    this.templeDetails = {
      "templeName":"Sri Ranganathaswamy Temple",
      "city":"Tiruchirappalli",
      "state":"Tamil Nadu",
      "address":"Srirangam",
      "banner":"../assets/temples/Ranganathaswamy-banner.jpg",
      "devotes":899,
      "needs":[{
        "name":"Food Donation",
        "value":"3000"
      },
      {
        "name":"Prasad",
        "value":"1000"
      },
      {
        "name":"Construction",
        "value":"15000"
      },{
        "name":"Bhandara",
        "value":"3300"
      },{
        "name":"Cloths",
        "value":"6000"
      },{
        "name":"Food Donation",
        "value":"3000"
      }]
    }
    this._commonService.updateBreadCrumb([
            {
                "path": "/temple-donations",
                "label": "Temples in "+this.templeDetails.city
            },
            {
                "path": "",
                "label": this.templeDetails.templeName
            }
        ]);
  }

}
