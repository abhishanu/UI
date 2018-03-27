import { Component } from '@angular/core';
 
@Component({
  selector: 'book-pandit',
  templateUrl: './book-pandit.html'
})
export class BookPanditComponent {
  toppandit:any = [];
  constructor() { }
  ngOnInit() {
     this.toppandit = [
      {
        "src": "../assets/pandit/pandit-1.jpg",
        "name":"R K Shridhar",
        "location": "New Delhi",
        "rating":"2"
      },
      {
        "src": "../assets/pandit/pandit-2.jpeg",
        "name":"Deepak Kapoor",
        "location": "New Delhi",
        "rating":"3"
      },
      {
        "src": "../assets/pandit/pandit-3.jpg",
        "name":"Prabhu Padanugas",
        "location": "New Delhi",
        "rating":"4"
      },
      {
        "src": "../assets/pandit/pandit-4.jpg",
        "name":"Jyoti Vardhan Sahni",
        "location": "New Delhi",
        "rating":"5"
      },
      {
        "src": "../assets/pandit/pandit-5.jpg",
        "name":"Pandit Mahent Ji",
        "location": "New Delhi",
        "rating":"1"
      },{
        "src": "../assets/pandit/pandit-2.jpeg",
        "name":"Deepak Kapoor",
        "location": "New Delhi",
        "rating":"2"
      }

    ];
  }  
}