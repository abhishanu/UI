import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donation',
  templateUrl: './donation.component.html'
})
export class DonationComponent implements OnInit {
  foodItems: any;
  dataItems:any;
  multiplier: number = 500;
  menuItems = [{
    "name": "Temple Needs",
    "data":"templeData"
  }, {
    "name": "Medicine",
    "data":"templeData"
  }, {
    "name": "Food Donation",
    "data":"foodItems"
  }, {
    "name": "Education",
    "data":"templeData"
  }, {
    "name": "Clothes",
    "data":"templeData"
  }, {
    "name": "Girl Child Marriage",
    "data":"templeData"
  }]
  constructor() { }

  ngOnInit() {
    this.foodItems = [
      {
        "name": "Food Donation At An Orphanage",
        "desc": "It is unfortunate that scores of children are homeless and have no family members to look after them. Such children living in orphanages as well as other institutions",
        "thumb": "../../assets/donation/orphanage.jpg"
      },
      {
        "name": "Food Donation At A Gurudwara",
        "desc": "Sikhism has always championed the cause of donation and seva. The very fundamental belief is to give back to the society and uplift those who are in need.",
        "thumb": "../../assets/donation/gurudwara.jpg"
      },
      {
        "name": "Food Donation At The Church",
        "desc": "Jesus fed his followers, thousands in numbers, with just two loaves of bread and fish.",
        "thumb": "../../assets/donation/church.jpg"
      },
      {
        "name": "Food Donation At Old Age Home",
        "desc": "Not everyone in life is fortunate to be surrounded by loved ones and family members.",
        "thumb": "../../assets/donation/old-age.jpg"
      }, {
        "name": "Food Donation At temple",
        "desc": "Temples are a haven for harmony and religious sanctuaries where one comes to attain peace and absolve their misgivings.",
        "thumb": "../../assets/donation/temple.jpg"
      },
      {
        "name": "Food Donation At Blind school",
        "desc": "Feeding the needy and the differently-able is considered highly auspicious. In fact, donating food or annadaan is a very noble deed.",
        "thumb": "../../assets/donation/school.jpg"
      }

    ]
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
  updateData(){
    this.dataItems = this.foodItems;
  }
}
