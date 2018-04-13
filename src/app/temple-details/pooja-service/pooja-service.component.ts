import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'detail-pooja-service',
  templateUrl: './pooja-service.component.html'
})
export class PoojaServiceComponent implements OnInit {
poojaList:any;
  constructor() { }

  ngOnInit() {
    this.poojaList =  [

      {
        "src": "../assets/puja-service/Navagraha-Pujas.jpg",
        "title": "Navagraha Pujas",
        "description": "Navgrah puja can be performed anytime to please the nine planets and get their blessings. Navgrah puja is done during the housewarming ceremony, during marriages, child naming ceremonies and all the important events in life",
        "price":"12982",
        "discounted":"11000"
      },
      {
        "src": "../assets/puja-service/Pitr-Dosh.jpg",
        "title": "Pitra Dosh Nivaran Puja",
        "description": "This puja relieves the souls of the deceased ancestors, It helps in nullifying Pitra Rin",
        "price":"28322",
        "discounted":"21000"
      },
      {
        "src": "../assets/puja-service/Shani.jpg",
        "title": "Shani Jaap for Shani Dosha Shanti",
        "description": "If you are burdened with Saturn, it will bring disappointments, sorrow, miseries, delays, difficulties, disputes and disharmony.",
        "price":"20062",
        "discounted":"17100"
      },
      {
        "src": "../assets/puja-service/Mangalik-Dosha-Puja.jpg",
        "title": "Mangalik Dosha Puja",
        "description": "Manglik dosh will also inflict some physical and mental illnesses like addictions, hypertension, burns and wounds, inflammatory conditions, anorexia and depression",
        "price":"5634",
        "discounted":"5100"
      },
      {
        "src": "../assets/puja-service/Vastu-Shanti.jpg",
        "title": "Vastu Shanti",
        "description": "Vastu puja is especially performed both to avert the adverse conditions caused due to the breach of Vastu rules.",
        "price":"128322",
        "discounted":"11000"
      },
      {
        "src": "../assets/puja-service/Mahamritunjya-Puja.jpg",
        "title": "Mahamritunjya Puja",
        "description": "The power of Mahamrityunjaya Jaap is such that an individual can achieve Moksha by chanting it with their heart and soul by evoking Shivaâs Energy.",
        "price":"60183",
        "discounted":"51000"
      },
      {
        "src": "../assets/puja-service/Gandmool-Shanti.jpg",
        "title": "Gandmool Shanti",
        "description": "The effects of Kaalsarp dosh on a person's life depends on the planetary positions and the power of the different planets in a given horoscope.",
        "price":"28322",
        "discounted":"21000"
      },
      {
        "src": "../assets/puja-service/Mangal-Dosha-Shanti.jpg",
        "title": "Mangal Dosha Shanti",
        "description": "Mangal Dosha occurs when the planet Mars (Mangal) occupies the 1st, 4th, 7th, 8th or 12th house of a person's horoscope.",
        "price":"7434",
        "discounted":"5100"
      }

    ];
  }

}
