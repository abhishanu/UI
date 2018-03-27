import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gau-sewa',
  templateUrl: './gau-sewa.component.html'
})
export class GauSewaComponent implements OnInit {
gauSewaItems:any;
  constructor() { }

  ngOnInit() {
    this.gauSewaItems = [
      {
        "src": "../assets/gausewa/gau-1.jpg",
      },
      {
        "src": "../assets/gausewa/gau-2.jpg",
      },
      {
        "src": "../assets/gausewa/gau-3.jpg",
      },{
        "src": "../assets/gausewa/gau-4.jpg",
      }
      ,{
        "src": "../assets/gausewa/gau-5.jpg",
      }
      ,{
        "src": "../assets/gausewa/gau-6.jpg",
      },{
        "src": "../assets/gausewa/gau-7.jpg",
      }
    ]
  }

}
