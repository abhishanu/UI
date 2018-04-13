import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'history',
  templateUrl: './history.component.html'
})
export class HistoryComponent {
  data: any;
  needs: any;
  pandits: any;
  pooja: any;
  seeTxt: any = "See More";

  photos: any;

  constructor() { }
  seeMore(event) {
    let target = event.target.parentElement;
    if (this.seeTxt == "See More") {
      target.classList.add("more-content");
      this.seeTxt = "See Less"
    }
    else {
      target.classList.remove("more-content");
      this.seeTxt = "See More"
    }
  }
  ngOnInit() {
    this.data =
      {
        "history": "Srirangam is the foremost of the eight self-manifested shrines (Swayam Vyakta Kshetras) of Lord Vishnu . It is also considered the first, foremost and the most important of the 108 main Vishnu temples (Divyadesams). This temple is also known as Thiruvaranga Tirupati, Periyakoil, Bhoologa Vaikundam, Bhogamandabam. In the Vaishnava parlance the term “KOIL” signifies this temple only. The temple is enormous in size. The temple complex is 156 acres in extent. It has seven prakaras or enclosures. These enclosures are formed by thick and huge rampart walls which run round the sanctum. There are 21 magnificent towers in all prakaras providing a unique sight to any visitor. this temple lies on an islet formed by the twin rivers Cauvery and Coleroon.<br/><br/>The temple of Sri Ranganathaswami at Srirangam boasts an historic past of great kingdom and a civilization thousands of years old. The reign of the Pallavas was marked by the creation of a solid religious foundation, for example the encouragement given by the dynasty appears to have contributed to the growth of Aryan institutions in Southern India more particularly in the Carnatic. Cholas reigned for about three hundred years over the Coromandel Coast and the greater part of Eastern Deccan, where they helped an advanced Hindu Culture to flourish.<br/><br/>The cholas were defeated in the thirteen century by the Pandyas of Madurai and Hoysalas of Mysore. Hoysalas had taken particular interest in the building of the Temple of Srirangam, leaving behind both the inscriptions and buildings. The Hoysalas were then driven away by the Pandyas in the early part of fourteenth Century. Later, the Mohammedans began frequently raiding the Deccan facing strong resistance from the Hindu Kingdom, which was established in Vijayanagar in 1336. The Kingdom maintained its independence until 1565.<br/><br/>During this time, the Europeans had appeared in the south of India. In the sixteenth century a number of foreign travelers and traders passed through but taking least interest in the hinterland except for the routes it provided for their trade with the Kingdom of Vijayanagar. In 1600, the English East India Company was formed, and 1664 the French company.<br/><br/>In 1680, King Aurangazeb (1658-1707), launched a campaign in western Deccan. After long sieges and a great loss of life, the fortress cities of Bijapur and Golconda fell to him, and the campaign lasted until his death.<br/><br/>In Europe, however, the war of Austrian succession set the English and the French at each other’s throats. Duplex captured Madras (1746), which was given back to the English two years later. The French were forced to surrender in 1752 and Duplex was disavowed and recalled in 1754.<br/><br/>In 1760, a further French attempt, led by Lally-Tollendal, w unsuccessful and the French trading post was dismantled in 1763. From then on, the English Company gradually annexed the whole of the territory of India. Though the French came near to victory, later on they were defeated in 1798 by the English led by Wellessley and who invaded Mysore and in 1799 captured the fortress of Srirangapatnam. There after all of the Southern India came under the supremacy of England. The Carnatic was included in the direct administration of the Madras Presidency where it remained."
      }
    this.needs = [{
      "src": "../assets/donation/food.jpg",
      "title": "Food Donation",
      "description": "Donate towards free and tasty lunch prasadam served every day to hundreds of pilgrims visiting the temple.",

    },
    {
      "src": "../assets/donation/construction.jpg",
      "title": "Temple Needs",
      "description": "Contribute towards the construction of The temple and seek the blessings of the Lord."
    },
    {
      "src": "../assets/donation/bookset.jpg",
      "title": "Education",
      "description": "The Bhagavad-gita is the crown-jewel of Vedic knowledge. The teachings of the Gita are meant to."
    },];
    this.pandits = [
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
      }

    ];
    this.pooja = [
      {
        "src": "../assets/puja-service/Gandmool-Shanti.jpg",
        "title": "Gandmool Shanti",
        "description": "The effects of Kaalsarp dosh on a person's life depends on the planetary positions and the power of the different planets in a given horoscope.",
        "price": "28322",
        "discounted": "21000"
      },
      {
        "src": "../assets/puja-service/Mangal-Dosha-Shanti.jpg",
        "title": "Mangal Dosha Shanti",
        "description": "Mangal Dosha occurs when the planet Mars (Mangal) occupies the 1st, 4th, 7th, 8th or 12th house of a person's horoscope.",
        "price": "7434",
        "discounted": "5100"
      },
      {
        "src": "../assets/puja-service/Navagraha-Pujas.jpg",
        "title": "Navagraha Pujas",
        "description": "Navgrah puja can be performed anytime to please the nine planets and get their blessings. Navgrah puja is done during the housewarming ceremony, during marriages, child naming ceremonies and all the important events in life",
        "price": "12982",
        "discounted": "11000"
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
      }

    ];
  }

}
