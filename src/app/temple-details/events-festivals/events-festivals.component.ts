import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'detail-events-festivals',
  templateUrl: './events-festivals.component.html'
})
export class EventsFestivalsComponent implements OnInit {
  eventsList: any;
  constructor() { }

  ngOnInit() {
    this.eventsList = [
      {
        "src": "../../assets/events/colture-rec-img.jpg",
        "title": "Maa Ganga Aarti",
        "location": "Varanasi Ghat",
        "day": "05",
        "month":"Apr",
        "year":"2018"
      },
      {
        "src": "../../assets/events/event-1.jpg",
        "title": "9 Days Navratri Anusthan with Khetri",
        "location": "Kalash Stahpana",
        "day": "15",
        "month":"Apr",
        "year":"2018"
      },
      {
        "src": "../../assets/events/event-2.jpg",
        "title": "Group Navratri puja.",
        "location": "Vaishno Dham",
        "day": "18",
        "month":"Apr",
        "year":"2018"
      },
      {
        "src": "../../assets/events/event-3.jpg",
        "title": "9 Days Durga Sahasranamam Puja for Ultimate Luck",
        "location": "Varanasi Ghat",
        "day": "25",
        "month":"Apr",
        "year":"2018"
      },
      {
        "src": "../../assets/events/event-4.jpg",
        "title": "Kanya Pujan on Ashtami or Navami.",
        "location": "Kalash Stahpana",
        "day": "07",
        "month":"May",
        "year":"2018"
      },
      {
        "src": "../../assets/events/event-5.jpg",
        "title": "Shani Dosha Nivaran puja at Shani Shingnapur",
        "location": "Shingnapur",
        "day": "17",
        "month":"May",
        "year":"2018"
      },
      {
        "src": "../../assets/events/event-6.jpg",
        "title": "Offer Tel Abhishekam at Shani Shingnapur to Appease Sat",
        "location": "Shingnapur",
        "day": "22",
        "month":"May",
        "year":"2018"
      }

    ];
  }

}
