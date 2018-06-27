import { Component, OnInit,Input } from '@angular/core';
import { RequestService } from '../../../services/request.service';
@Component({
  selector: 'awards',
  templateUrl: './awards.component.html'
})
export class AwardsComponent {
  @Input() awards;
  constructor(private _requestService: RequestService) { }

  ngOnInit() {
    this.awards = [{
      "src":"../../assets/awards/award.jpg",
      "title":"SAKSHAM-2016 Award",
      "desc":"Most recently in the first week of November 2016, globally celebrated astrologer Pandit Ankit Sharma received another prestigious award in the field of Astrology, during a mega and momentous astrological seminar named as the Akhil Bhartiya Jyotish Sammelan - SAKSHAM. Organized by a reputed social organization of Ambala Cantt., the Jyotish Shakti Sangh, this grand event was held at BPC Jain Hall, Jagadhari Road, Ambala Cantt (Haryana) from 5th to 6th November 2016. This splendid award was given to him to honor his gracious presence at the seminar, and his enlightening and very useful message to the participants on relevance and benefits of Vedic Astrology."
    },
    {
      "src":"../../assets/awards/award2.jpg",
      "title":"Jyotish Prangan Certificate and Award",
      "desc":"In October 2016, globally renowned astrologer Pandit Ankit Sharma was given the  during a massive event named as URJA, which was a highly significant mega event on Astrology and Ayurveda. Held from 14th to 16th October 2016 at sector-34 of Chandigarh, URJA was organized jointly by a prestigious social organization Jyotish Prangan (located in Panchkula, Haryana), and the Planet Ayurveda. Over 100 internationally famous Astrologers, Vastu Shastra Specialists, Ayurveda Specialists, professional Psychic Readers, Tarot Card Readers, etc. pertaining to India and abroad, had actively participated in URJA. In glamorous presence of these celebrities, this 'Jyotish Prangan Certificate and Award' was handed over to him by the chief guest of this giant astrological event, Shri V.P. Singh Badnore, Hon'ble Governor of Punjab & Administrator to Chandigarh."
    },{
      "src":"../../assets/awards/award3.jpg",
      "title":"Akhil Bhartiya Jyotish Award 2015",
      "desc":"In April 2015 again, the grand and one of the leading astrologers of Asia, astrologer Pandit Ankit Sharma won another glorious and elevating award, the 'Akhil Bhartiya Jyotish Award' in Amritsar. Received on 27th April 2015, this magnificent and dignifying award honored him for his impeccable and marvelous services based on astrology and palmistry to the troubled and hopeless people of India and countries worldwide."
    },]
  }

}
