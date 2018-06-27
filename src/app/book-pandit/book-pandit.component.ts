import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { RequestService } from '../services/request.service';
@Component({
  selector: 'app-book-pandit',
  templateUrl: './book-pandit.component.html'
})
export class BookPanditComponent {
  poojaData: any;
  toppandit: any;
  params: any = {};
  services: any = [];
  city: any = [];
  constructor(private _commonService: CommonService, private _requestService: RequestService) {
    this.city.push(this._commonService.currentCity);
    this.params = {
      "requestType": "filterPandit",
      "requestParam": {
        "cityNames": this.city,
        "serviceNames": this.services
      }
    }

  }
  searchByPanditName(event) {
    let keycode = event.which == 13 || event.keyCode == 13;
    if (keycode) {
      this.setFilters(event, 'byPandit', event.target.value)
    }
  }
  getPandits() {
    this._commonService.showLoader();
    this._requestService.postData("getPanditByFilters", this.params).subscribe(data => {
      this.toppandit = data.json().response;
      this._commonService.hideLoader();
    }, err => {
      this._commonService.showHttpErrorMsg();
    });
  }
  ngOnInit() {
    this.getPandits();
    this._requestService.fetchData("getAllPoojaServices").subscribe(data => {

      this.poojaData = data.json();
    }, err => {
      this._commonService.showHttpErrorMsg();
    });

    this._commonService.updateBreadCrumb([
      {
        "path": "/book-pandit",
        "label": "Book Pandit"
      },
      {
        "path": "",
        "label": "Pandit List"
      }
    ]);

    this.toppandit = [
      {
        "src": "../assets/pandit/pandit-1.jpg",
        "name": "R K Shridhar",
        "location": "New Delhi",
        "rating": "2",
        'URL': "Amritsar/pandit-detail/Deepak Kapoor/1",
        "reviews": "336",
        "pooja": ["Bhoomi Poojan", "Maha Abhishek", "Namkaran", "Shiva Pooja"],
        "about": "A learned and well-versed Panditji.  Available for all Bengali rituals.",
        "whatsapp": true,
        "inperson": true,
        "chat": true,
        "withitems": true
      },
      {
        "src": "../assets/pandit/pandit-2.jpeg",
        "name": "Deepak Kapoor",
        "location": "New Delhi",
        "rating": "3",
        "reviews": "36",
        "whatsapp": true,
        "inperson": true,
        "withitems": true,
        'URL': "Amritsar/pandit-detail/Deepak Kapoor/1",
        "pooja": ["Vishnu Pooja", "Engagement Pooja", "Namkaran", "Shanti Pooja,", "Shiva Pooja"],
        "about": "A renowned pandit of Addya Kali Bari at Kasba Area in South Kolkata. Services Offered: Marriage, Thread Ceremony, Kalsarpodosh,   Bastudosh"
      },
      {
        "src": "../assets/pandit/pandit-3.jpg",
        "name": "Prabhu Padanugas",
        "location": "New Delhi",
        "rating": "4",
        "reviews": "456",
        "whatsapp": true,
        "inperson": true,
        'URL': "Amritsar/pandit-detail/Deepak Kapoor/1",
        "chat": true,
        "pooja": ["Bhoomi Poojan", "Maha Abhishek", "Namkaran", "Shiva Pooja"],
        "about": "Subir Bhattacharjee is a competent pandit engaged in this profession for last 25 years. His speciality lies in his deep knowledge and ability."
      },
      {
        "src": "../assets/pandit/pandit-4.jpg",
        "name": "Jyoti Vardhan Sahni",
        "location": "New Delhi",
        "rating": "5",
        "reviews": "645",
        "inperson": true,
        "chat": true,
        'URL': "Amritsar/pandit-detail/Deepak Kapoor/1",
        "withitems": true,
        "pooja": ["Vishnu Pooja", "Engagement Pooja", "Namkaran", "Shanti Pooja,", "Shiva Pooja"],
        "about": "He has been giving marriage, doing Puja, conducting all the important events of Bengali community over 50 years. Services Offered"
      },
      {
        "src": "../assets/pandit/pandit-5.jpg",
        "name": "Pandit Mahent Ji",
        "location": "New Delhi",
        "rating": "1",
        "reviews": "98",
        "whatsapp": true,
        "inperson": true,
        "chat": true,
        'URL': "Amritsar/pandit-detail/Deepak Kapoor/1",
        "withitems": true,
        "pooja": ["Bhoomi Poojan", "Maha Abhishek", "Namkaran", "Shiva Pooja"],
        "about": "Subrata Banerjee has been performing marriage, annaprasan, upanayan and other rituals related to Bengali community for almost  20 years. Knowledge"
      }, {
        "src": "../assets/pandit/pandit-2.jpeg",
        "name": "Deepak Kapoor",
        "location": "New Delhi",
        "rating": "2",
        "reviews": "366",
        "whatsapp": true,
        'URL': "Amritsar/pandit-detail/Deepak Kapoor/1",
        "withitems": true,
        "pooja": ["Vishnu Pooja", "Engagement Pooja", "Namkaran", "Shanti Pooja,", "Shiva Pooja"],
        "about": "He's a pandit of Adi Kali Bari near Kasba and is competent enough to take up all ritualistic activities (related to events & Puja) for Bengali"
      }

    ];
  }
  private setFilters($event, filterName, service) {
    if (filterName == "byPandit") {
      this.params.requestParam["panditName"] = [service];
    }
    else if(filterName == "rating"){
       this.params.requestParam["rating"] = [service];
    }
    else {
      if ($event.currentTarget && $event.currentTarget.checked) {
        this[filterName].push(service);
      } else {
        let index;
        index = this[filterName].indexOf(service);
        this[filterName].splice(index, 1);
      }
      
    }
    this.getPandits();
  }
  
}
