import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { RequestService } from '../services/request.service';
@Component({
  moduleId: module.id.toString(),
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private bannerCarouselItems: any;
  private shloklItems: any;
  private popularSearchesIteams: any;
  constructor(private _commonService: CommonService, private _requestService: RequestService) {
    
  }

  ngOnInit() {
    this._commonService.updateBreadCrumb([]);

    this.bannerCarouselItems = [
      {
        "src": "../assets/banner/1.jpg",
        "title": "Akshardham Temple",
        "description": "Akshardham or Swaminarayan Akshardham complex is a Hindu mandir."
      },

      {
        "src": "../assets/banner/6.jpg",
        "title": "Srirangam Temple",
        "description": "Srirangam is the foremost of the eight self-manifested shrines (Swayam Vyakta Kshetras) of Lord Vishnu"
      },
      {
        "src": "../assets/banner/5.jpg",
        "title": "Golden Temple",
        "description": "this is a test description for the title"
      },
      {
        "src": "../assets/banner/2.jpg",
        "title": "Haridwar Har Ki Pauri.",
        "description": "Haridwar, visit Mansa Devi Temple & Ganga aarti at Har Ki Pauri"
      },
      {
        "src": "../assets/banner/3.jpg",
        "title": "ARULMIGU MEENAKSHI SUNDARESHWARAR THIRUKKOIL",
        "description": "this is a test description for the title"
      },
      {
        "src": "../assets/banner/4.jpg",
        "title": "Badrinath Temple",
        "description": "this is a test description for the title"
      },

    ];
    this.popularSearchesIteams = [
      {
        "heading": "Temple In Manali 1",
        "type": "Tours"
      },
      {
        "heading": "Gau Sewa 2",
        "type": "Event"
      },
      {
        "heading": "Religious Tour in Kerla 3",
        "type": "Tours"
      },
      {
        "heading": "Live VashnoDevi Aarti 4",
        "type": "Video Streaming"
      },
      {
        "heading": "Temple In Manali 5",
        "type": "Tours"
      },
      {
        "heading": "Gau Sewa 6",
        "type": "Event"
      },
      {
        "heading": "Religious Tour in Kerla 7",
        "type": "Tours"
      },
      {
        "heading": "Live VashnoDevi Aarti 8",
        "type": "Video Streaming"
      },
      {
        "heading": "Temple In Manali 9",
        "type": "Tours"
      },
      {
        "heading": "Gau Sewa 10",
        "type": "Event"
      },
      {
        "heading": "Religious Tour in Kerla 11",
        "type": "Tours"
      },
      {
        "heading": "Live VashnoDevi Aarti 12",
        "type": "Video Streaming"
      },
      {
        "heading": "Temple In Manali 13",
        "type": "Tours"
      },
      {
        "heading": "Gau Sewa 14",
        "type": "Event"
      },
      {
        "heading": "Religious Tour in Kerla 15",
        "type": "Tours"
      },
      {
        "heading": "Live VashnoDevi Aarti 16",
        "type": "Video Streaming"
      },

    ];
  }

}
