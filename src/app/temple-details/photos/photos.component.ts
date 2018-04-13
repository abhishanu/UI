import { Component, OnInit } from '@angular/core';
import { Lightbox,LightboxConfig } from 'angular2-lightbox';
@Component({
  selector: 'temple-detail-photos',
  templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnInit {
photos:any;
  constructor(private _lighboxConfig: LightboxConfig,private _lightbox: Lightbox) { }

  ngOnInit() {

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
      },{
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
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.photos, index,{showImageNumberLabel: true,disableScrolling:true,centerVertically:true });
  }

}
