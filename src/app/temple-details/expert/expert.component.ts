import { Component, OnInit,Input } from '@angular/core';
import { RequestService } from '../../services/request.service';
@Component({
  selector: 'expert',
  templateUrl: './expert.component.html'
})
export class ExpertComponent implements OnInit {
  @Input() data;
  toppandit: any;
  aboutpandits: any;
  constructor(private _requestService: RequestService) { }

  ngOnInit() {
    this.toppandit = [
      {
        "src": "../assets/pandit/pandit-1.jpg",
        "name": "R K Shridhar",
        "location": "New Delhi",
        "rating": "2"
      },
      {
        "src": "../assets/pandit/pandit-2.jpeg",
        "name": "Deepak Kapoor",
        "location": "New Delhi",
        "rating": "3"
      },
      {
        "src": "../assets/pandit/pandit-3.jpg",
        "name": "Prabhu Padanugas",
        "location": "New Delhi",
        "rating": "4"
      },
      {
        "src": "../assets/pandit/pandit-4.jpg",
        "name": "Jyoti Vardhan Sahni",
        "location": "New Delhi",
        "rating": "5"
      },
      {
        "src": "../assets/pandit/pandit-5.jpg",
        "name": "Pandit Mahent Ji",
        "location": "New Delhi",
        "rating": "1"
      }, {
        "src": "../assets/pandit/pandit-2.jpeg",
        "name": "Deepak Kapoor",
        "location": "New Delhi",
        "rating": "2"
      }

    ];
    this.aboutpandits = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Monc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. tor wisi et urna. Aliquam erat volutpat.";
  }

}
