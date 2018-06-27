import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { RequestService } from '../services/request.service';
@Component({
  moduleId: module.id.toString(),
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private popularSearchesIteams: any;
  constructor(private _commonService: CommonService, private _requestService: RequestService) {
    
  }

  ngOnInit() {
    this._commonService.updateBreadCrumb([]);
    
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
