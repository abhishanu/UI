import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'popular-across-india',
  templateUrl: './popular-across-india.component.html'
})
export class PopularAcrossIndiaComponent implements OnInit {
  acrossTemples: any;
  constructor() { }

  ngOnInit() {
    this.acrossTemples = [
      {
        "name": "Mahabaleshwar Temple",
        "city": "Gokarna",
        "thumb": "../assets/temples/1.jpg"
      },
      {
        "name": "Sri Ranganathaswamy Temple",
        "city": "Srirangam",
        "thumb": "../assets/temples/Ranganathaswamy.jpg"
      },
      {
        "name": "Jagannath Temple",
        "city": "Puri",
        "thumb": "../assets/temples/jagannath.jpg"
      },
      {
        "name": "Ramaswamy Temple",
        "city": "Kumbakonam",
        "thumb": "../assets/temples/Ramaswamy.jpg"
      },
      {
        "name": "Mahabaleshwar Temple",
        "city": "Gokarna",
        "thumb": "../assets/temples/1.jpg"
      },
      {
        "name": "Sri Ranganathaswamy Temple",
        "city": "Srirangam",
        "thumb": "../assets/temples/Ranganathaswamy.jpg"
      },
    ]
  }

}
