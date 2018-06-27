import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { RequestService } from '../../../services/request.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'pandit-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent {
  @Input() reviews;
  count: any = 0;
  reviewsData: any;
  params: any = {};
  ratingTitle: any;
  ratingDesc: any;
  currentRating: any;
  constructor(private _commonService: CommonService, private _requestService: RequestService, private route: ActivatedRoute) { }

  ngOnInit() {
    setTimeout(() => {
      this.reviewsData = this.reviews.ReviewInDetail;
    }, 2000);

  }
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
      "requestType": "panditReview",
      "requestParam": {
        "rating": "" + this.currentRating,
        "reviewDesc": this.ratingDesc,
        "userReview": this.ratingTitle,
        "panditId":  this.route.snapshot.paramMap.get('id'),
        "userId": "12"
      }
    }
    this._commonService.showLoader();
    this._requestService.postData("servicesOrPanditReview", this.params).subscribe(data => {
      this._commonService.showAlert({
        type: "success", msg: data.json().response
      });
      //this.getReview();
      this._commonService.hideLoader();
    }, err => {
      this._commonService.showHttpErrorMsg();
    });
  }
}
