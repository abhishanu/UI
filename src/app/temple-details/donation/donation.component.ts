import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'donation',
  templateUrl: './donation.component.html'
})
export class DonationComponent implements OnInit {
  foodItems: any;
  clothItems: any;
  dataItems: any;
  templeItems: any;
  medicineItems: any;
  educationItems: any;
  multiplier: number = 500;
  params: any;
  constructor(private _commonService: CommonService, private _requestService: RequestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this._requestService.fetchData("getAllDonationDetails/" + this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.dataItems = data.json();
      this.foodItems = this.dataItems["Food Donation"];
      this.clothItems = this.dataItems["Clothes"];
      this.templeItems = this.dataItems["Temple Needs"];
      this.medicineItems = this.dataItems["Medicine"];
      this.educationItems = this.dataItems["Education"];

    }, err => {
      this._commonService.showHttpErrorMsg();
    });
  }
  updateItem(event, type) {
    let parentElem = event.target.parentElement;
    let updateCount = parentElem.querySelector(".count");
    let count = parseInt(updateCount.textContent);
    if (type == "minus" && count == 1) {
    }
    else {
      count = type == "add" ? count + 1 : count - 1;
      updateCount.textContent = count;
      let total = count * this.multiplier;
      parentElem.querySelector(".total").textContent = total;
    }
  }
  donateNow(event, donationSubCategoryId, templeDonationCategoryId) {
    let previousElementSibling = event.target.previousElementSibling;
    let donatedMoney = previousElementSibling.querySelector(".total").innerHTML;
    this.params = {
      "requestType": "donation",
      "requestParam": {

        "ammount": [donatedMoney],
        "donationSubCategoryId": [donationSubCategoryId],
        "templeDonationCategoryId": [templeDonationCategoryId]
      }
    }
    this._commonService.showLoader();
    this._requestService.postData("donateMoney", this.params).subscribe(data => {
      this._commonService.hideLoader();
      if (data.json().status == "ERROR") {
        this._commonService.showAlert({
          type: "danger", msg: data.json().response.Error
        })
      }
      else {
        this._commonService.showAlert({
          type: "success", msg: 'Your Donation submited successfully.'
        })
      }
    }, err => {
      this._commonService.showHttpErrorMsg();
    });
  }
}
