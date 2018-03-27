import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'near-by-temple',
  templateUrl: './near-by-temple.component.html'
})
export class NearByTempleComponent implements OnInit {
  nearByTemples: any;
  constructor() { }

  ngOnInit() {
    this.nearByTemples = [
      {
        "name": "Mahabaleshwar Temple",
        "city": "Gokarna",
        "thumb": "../../assets/temples/1.jpg"
      },
      {
        "name": "Sri Ranganathaswamy Temple",
        "city": "Srirangam",
        "thumb": "../../assets/temples/Ranganathaswamy.jpg"
      },
      {
        "name": "Jagannath Temple",
        "city": "Puri",
        "thumb": "../../assets/temples/jagannath.jpg"
      },
      {
        "name": "Ramaswamy Temple",
        "city": "Kumbakonam",
        "thumb": "../../assets/temples/Ramaswamy.jpg"
      },
      {
        "name": "Mahabaleshwar Temple",
        "city": "Gokarna",
        "thumb": "../../assets/temples/1.jpg"
      },
      {
        "name": "Sri Ranganathaswamy Temple",
        "city": "Srirangam",
        "thumb": "../../assets/temples/Ranganathaswamy.jpg"
      }
      ,
      {
        "name": "Sri Ranganathaswamy Temple",
        "city": "Srirangam",
        "thumb": "../../assets/temples/Ranganathaswamy.jpg"
      },
      {
        "name": "Jagannath Temple",
        "city": "Puri",
        "thumb": "../../assets/temples/jagannath.jpg"
      },
      {
        "name": "Ramaswamy Temple",
        "city": "Kumbakonam",
        "thumb": "../../assets/temples/Ramaswamy.jpg"
      },
      {
        "name": "Mahabaleshwar Temple",
        "city": "Gokarna",
        "thumb": "../../assets/temples/1.jpg"
      }
    ]
  }

}
