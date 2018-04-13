import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style,query,stagger } from '@angular/animations';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'temple-details',
  templateUrl: './temple-details.component.html',
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('a.quick-tag',style({ transform: 'translateY(-100%)'})),
        query('a.quick-tag',
          stagger('300ms', [
            animate('600ms', style({ transform: 'translateY(0)'}))
        ]))
      ])
    ])
  ]
})
export class TempleDetailsComponent implements OnInit {
  private templeDetails: any;
  private specialEvent: any;
  upcomingEvents:any;
  reviews: any;
  count:any=0;
  constructor(private _commonService: CommonService) { }


  ngOnInit() {
    this.reviews = [
      {
        "name": "Shrinivas Nathan",
        "title": "Sed ut perspiciatis unde omnis iste natus error sit",
        "comment": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit labor.",
        "image": "../assets/users/user-default.png",
        "rating": 3,
        "location": "Haridwar, Uttrakhand",
      },
      {
        "name": "Deepak Rawat",
        "title": "Sed ut perspiciatis unde omnis iste natus error sit",
        "comment": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.  Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit labor.",
        "image": "../assets/users/user-default.png",
        "rating": 4,
        "location": "Haridwar, Uttrakhand",
      },
      {
        "name": "Gaurav Bhardwaj",
        "title": "Sed ut perspiciatis unde omnis iste natus error sit",
        "comment": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.  Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit labor.",
        "image": "../assets/users/user-default.png",
        "rating": 5,
        "location": "Haridwar, Uttrakhand",
      }
    ];
    this.templeDetails = {
      "templeName": "Sri Ranganathaswamy Temple",
      "city": "Tiruchirappalli",
      "state": "Tamil Nadu",
      "address": "Srirangam",
      "banner": "../assets/temples/Ranganathaswamy-banner.jpg",
      "devotes": 899,
      "operationalHour": "05:30 am to 10:00 pm. In special days visiting times can be changed.",
      "summary": "The Sri Ranganathaswamy Temple or Thiruvarangam is a Hindu temple dedicated to Ranganatha, a reclining form of the Hindu deity Vishnu, located in Srirangam, Tiruchirapalli, Tamil Nadu, India. Constructed in the Tamil style of architecture, this temple is glorified in the Thiviya Pirabandham, the early medieval Tamil literature canon of the Alvar saints of Bhakti movement from the 6th to 9th centuries AD. The temple tops the list among the 108 Divya Desams dedicated to Vishnu.",
      "needs": [{
        "name": "Food Donation",
        "value": "3000"
      },
      {
        "name": "Prasad",
        "value": "1000"
      },
      {
        "name": "Construction",
        "value": "15000"
      }, {
        "name": "Bhandara",
        "value": "3300"
      }, {
        "name": "Cloths",
        "value": "6000"
      }, {
        "name": "Food Donation",
        "value": "3000"
      }]

    }
    this.specialEvent = [
      {
        "eventName": "Bhandara",
        "date": "31",
        "month":"Mar",
        "year":"2018",
        "day":"Saturday",
        "eventDesc": "Bhandara organised by temple devotees.",
        "eventImg": "../assets/temples/bhandara.jpg",
        "location":"New Delhi"
      },
      {
        "eventName": "Medical Camp",
        "date": "10",
        "month":"Apr",
        "year":"2018",
        "day":"Tuesday",
        "eventDesc": "Medical Camp organised by temple devotees.",
        "eventImg": "../assets/temples/medical-camp.jpg",
        "location":"Mathura"
      },
    ];
    this.upcomingEvents = [
      {
        "eventName": "Kanya Pujan",
        "date": "25",
        "month":"Mar",
        "year":"2018",
        "day":"Sunday",
        "eventDesc": "Kanya Pujan on Ashtami or Navami",
        "eventImg": "../../assets/events/event-6.jpg",
        "location":"Haridwar"
      },
      {
        "eventName": "Shani Dosha",
        "date": "17",
        "month":"Apr",
        "year":"2018",
        "day":"Tuesday",
        "eventDesc": "Shani Dosha Nivaran puja at Shani Shingnapur",
        "eventImg": "../../assets/events/event-1.jpg",
        "location":"Mathura"
      },
    ]
    this._commonService.updateBreadCrumb([
      {
        "path": "/temple-donations",
        "label": "Temples in " + this.templeDetails.city
      },
      {
        "path": "",
        "label": this.templeDetails.templeName
      }
    ]);
  }

}
