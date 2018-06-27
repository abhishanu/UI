import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style, query, stagger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';
import { RequestService } from '../services/request.service';
@Component({
  selector: 'temple-details',
  templateUrl: './temple-details.component.html',
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('a.quick-tag', style({ transform: 'translateY(-100%)' })),
        query('a.quick-tag',
          stagger('300ms', [
            animate('600ms', style({ transform: 'translateY(0)' }))
          ]))
      ])
    ])
  ]
})
export class TempleDetailsComponent implements OnInit {
  private templeDetails: any;
  private specialEvent: any;
  private detail: any = [];
  upcomingEvents: any;
  reviews: any;
  connectivity: any = [];
  count: any = 0;
  poojaService: any;
  experts: any;
  gallery: any;
  images: any;
  params: any = {};
  ratingTitle:any;
  ratingDesc:any;
  currentRating: any;
  constructor(private _commonService: CommonService, private _requestService: RequestService, private route: ActivatedRoute) { }

  rating(event) {
    let currentVal = parseInt(event.target.getAttribute("value"));
    let starElem = event.currentTarget.children;
    let removeClass = document.querySelector(".temple-rating span.filled");
    removeClass ? removeClass.classList.remove("filled") : "";
    starElem[5 - currentVal].classList.add("filled");
    this.currentRating = currentVal;
    //alert(event.target.getAttribute("value"))
  }
  postReview() {
    this.params = {
      "requestType": "save",
      "requestParam": {
        "rating":""+this.currentRating,
        "reviewDesc": this.ratingDesc,
        "userReview": this.ratingTitle,
        "templeId": this.route.snapshot.paramMap.get('id'),
        "userId": "12"
      }
    }
 this._commonService.showLoader();
    this._requestService.postData("saveTempleReview", this.params).subscribe(data => {
      this._commonService.showAlert({
          type: "success", msg: data.json().response
        });
        this.getReview();
      this._commonService.hideLoader();
    }, err => {
      this._commonService.showHttpErrorMsg();
    });
  }
  getReview(){
    this._requestService.fetchData("getReview?type=temple&id=" + this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.reviews = data.json().response.ReviewInDetail;

    }, err => {
      this._commonService.showHttpErrorMsg();
    });
  }
  ngOnInit() {
    this._commonService.showLoader();
    this._requestService.fetchData("getTempleDetails/" + this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.detail = data.json();
      this._commonService.hideLoader();
      this._commonService.updateBreadCrumb([
        {
          "path": "/temple-donations",
          "label": "Temples in " + this.detail.Temple_Dist
        },
        {
          "path": "",
          "label": this.detail.Temple_Name
        }
      ]);

    }, err => {
      this._commonService.showHttpErrorMsg();
    });
    this._requestService.fetchData("getTempleConnectivityDetails/" + this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.connectivity = data.json();

    }, err => {
      this._commonService.showHttpErrorMsg();
    });
    this._requestService.fetchData("getPanditAssociatedWithTemple/" + this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.experts = data.json().response;

    }, err => {
      this._commonService.showHttpErrorMsg();
    });
    this._requestService.fetchData("getAllPoojaServices/" + this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.poojaService = data.json().response;

    }, err => {
      this._commonService.showHttpErrorMsg();
    });
    this.getReview();
    this._requestService.fetchData("getTempleImageGallery/" + this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.gallery = data.json().response;
      this.images = this.gallery.Images;

    }, err => {
      this._commonService.showHttpErrorMsg();
    });



    this.specialEvent = [
      {
        "eventName": "Bhandara",
        "date": "31",
        "month": "Mar",
        "year": "2018",
        "day": "Saturday",
        "eventDesc": "Bhandara organised by temple devotees.",
        "eventImg": "../assets/temples/bhandara.jpg",
        "location": "New Delhi"
      },
      {
        "eventName": "Medical Camp",
        "date": "10",
        "month": "Apr",
        "year": "2018",
        "day": "Tuesday",
        "eventDesc": "Medical Camp organised by temple devotees.",
        "eventImg": "../assets/temples/medical-camp.jpg",
        "location": "Mathura"
      },
    ];
    this.upcomingEvents = [
      {
        "eventName": "Kanya Pujan",
        "date": "25",
        "month": "Mar",
        "year": "2018",
        "day": "Sunday",
        "eventDesc": "Kanya Pujan on Ashtami or Navami",
        "eventImg": "../../assets/events/event-6.jpg",
        "location": "Haridwar"
      },
      {
        "eventName": "Shani Dosha",
        "date": "17",
        "month": "Apr",
        "year": "2018",
        "day": "Tuesday",
        "eventDesc": "Shani Dosha Nivaran puja at Shani Shingnapur",
        "eventImg": "../../assets/events/event-1.jpg",
        "location": "Mathura"
      },
    ]

  }

}
