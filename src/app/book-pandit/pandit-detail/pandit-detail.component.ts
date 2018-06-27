import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'angular2-lightbox';
import { CommonService } from '../../services/common.service';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pandit-detail',
  templateUrl: './pandit-detail.component.html'
})
export class PanditDetailComponent implements OnInit {
  panditdetail: any;
  photos: any;
  videos: any;
  articles: any;
  poojaService: any;
  awards: any;
  reviews: any;
  constructor(private _lighboxConfig: LightboxConfig, private _lightbox: Lightbox, private _commonService: CommonService, private _requestService: RequestService, private route: ActivatedRoute) {
    this._commonService.updateBreadCrumb([
      {
        "path": "/book-pandit",
        "label": "Pandit List"
      },
      {
        "path": "",
        "label": "Pandit Detail"
      }
    ]);

  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.photos, index, { showImageNumberLabel: true, disableScrolling: true, centerVertically: true });
  }
  fetchPanditOtherData(){
    this._requestService.fetchData("getPanditArticles/" + this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.articles = data.json().response;
    }, err => {
      this._commonService.showHttpErrorMsg();
    });
    this._requestService.fetchData("getPanditPoojaServices/" + this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.poojaService = data.json().response;
    }, err => {
      this._commonService.showHttpErrorMsg();
    });
    this._requestService.fetchData("getPanditAwardsDetails/" + this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.awards = data.json().response;
    }, err => {
      this._commonService.showHttpErrorMsg();
    });
    this._requestService.fetchData("getReview?type=pandit&id=" + this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.reviews = data.json().response;
    }, err => {
      this._commonService.showHttpErrorMsg();
    });
  }
  ngOnInit() {
    this._commonService.showLoader();
    this._requestService.fetchData("getPanditDetails/" + this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.panditdetail = data.json().response;
      this._commonService.hideLoader();
      this.fetchPanditOtherData();
    }, err => {
      this._commonService.showHttpErrorMsg();
    });
    
    this.videos = [
      {
        "poster": "../assets/videos/video-1.jpg",
        "videosrc": "../assets/videos/video-1.mp4"
      },
      {
        "poster": "../assets/videos/video-2.jpg",
        "videosrc": "../assets/videos/video-2.mp4"
      }, {
        "poster": "../assets/videos/video-3.jpg",
        "videosrc": "../assets/videos/video-3.mp4"
      }, {
        "poster": "../assets/videos/video-4.jpg",
        "videosrc": "../assets/videos/video-4.mp4"
      }, {
        "poster": "../assets/videos/video-5.jpg",
        "videosrc": "../assets/videos/video-1.mp4"
      }, {
        "poster": "../assets/videos/video-6.jpg",
        "videosrc": "../assets/videos/video-2.mp4"
      }, {
        "poster": "../assets/videos/video-7.jpg",
        "videosrc": "../assets/videos/video-3.mp4"
      }, {
        "poster": "../assets/videos/video-8.jpg",
        "videosrc": "../assets/videos/video-4.mp4"
      }
    ];
    this.photos = [
      {
        "src": "../../assets/gallery/pic-1.jpg",
        "title": "Jaap",
      },
      {
        "src": "../../assets/gallery/hanuman-puja.jpg",
        "title": "hanuman puja",
      },
      {
        "src": "../../assets/gallery/shirdi_sai_baba-shamadhi-1.jpg",
        "title": "shirdi_sai_baba-shamadhi",
      },
      {
        "src": "../../assets/gallery/Vaishnavmaa.jpg",
        "title": "Vaishnavmaa",
      },
      {
        "src": "../../assets/gallery/DURGAPOOJA.jpeg",
        "title": "DURGAPOOJA",
      },
      {
        "src": "../../assets/gallery/mahakaleswer.jpg",
        "title": "mahakaleswer",
      },
      {
        "src": "../../assets/gallery/Satyanarayan-Puja.jpg",
        "title": "Satyanarayan-Puja",
      },

      {
        "src": "../../assets/gallery/laxmi-puja.jpg",
        "title": "laxmi-puja",
      },
      {
        "src": "../../assets/gallery/Saraswati-Pooja.jpg",
        "title": "Ayudha Puja and Saraswati Pooja",
      },
      {
        "src": "../../assets/gallery/pic-1.jpg",
        "title": "Jaap",
      },
      {
        "src": "../../assets/gallery/hanuman-puja.jpg",
        "title": "hanuman puja",
      },
      {
        "src": "../../assets/gallery/shirdi_sai_baba-shamadhi-1.jpg",
        "title": "shirdi_sai_baba-shamadhi",
      },
      {
        "src": "../../assets/gallery/Vaishnavmaa.jpg",
        "title": "Vaishnavmaa",
      },
      {
        "src": "../../assets/gallery/DURGAPOOJA.jpeg",
        "title": "DURGAPOOJA",
      },
      {
        "src": "../../assets/gallery/mahakaleswer.jpg",
        "title": "mahakaleswer",
      },
      {
        "src": "../../assets/gallery/Satyanarayan-Puja.jpg",
        "title": "Satyanarayan-Puja",
      },

      {
        "src": "../../assets/gallery/laxmi-puja.jpg",
        "title": "laxmi-puja",
      },
      {
        "src": "../../assets/gallery/Saraswati-Pooja.jpg",
        "title": "Ayudha Puja and Saraswati Pooja",
      }, {
        "src": "../../assets/gallery/pic-1.jpg",
        "title": "Jaap",
      },
      {
        "src": "../../assets/gallery/hanuman-puja.jpg",
        "title": "hanuman puja",
      },
      {
        "src": "../../assets/gallery/shirdi_sai_baba-shamadhi-1.jpg",
        "title": "shirdi_sai_baba-shamadhi",
      },
      {
        "src": "../../assets/gallery/Vaishnavmaa.jpg",
        "title": "Vaishnavmaa",
      },
      {
        "src": "../../assets/gallery/DURGAPOOJA.jpeg",
        "title": "DURGAPOOJA",
      },
      {
        "src": "../../assets/gallery/mahakaleswer.jpg",
        "title": "mahakaleswer",
      },
      {
        "src": "../../assets/gallery/Satyanarayan-Puja.jpg",
        "title": "Satyanarayan-Puja",
      },

      {
        "src": "../../assets/gallery/laxmi-puja.jpg",
        "title": "laxmi-puja",
      },
      {
        "src": "../../assets/gallery/Saraswati-Pooja.jpg",
        "title": "Ayudha Puja and Saraswati Pooja",
      }

    ];
  }

}
