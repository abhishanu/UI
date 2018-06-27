import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from '../../../services/request.service';
@Component({
  selector: 'services-pooja',
  templateUrl: './services-pooja.component.html'
})
export class ServicesPoojaComponent {
  @Input() poojaService;
  data: any;
  isBookingOverlayOpend: any = true;
  oneAtATime: boolean = true;
  isFirstOpen: boolean = true;
  percent: any;
  constructor(private _requestService: RequestService) { }

  ngOnInit() {
    this.data = {
      "desc": "Ganesh Chaturthi is most important festival celebrated in India. Lord Ganesh is Lord of knowledge, wisdom, Prosperity, Fortune, birthday is celebrated as Ganesh Chathurthi (Vinayaka Chathurthi / Vinayaka Chavithi).",
      "img": "../assets/images/Ganesh-Chaturthi.jpg",
      "name": "Ganesh Chaturthi",
      "packages": [{
        "name": ""
      }],
      "samagri": ["Kumkum (Red powder)", "Ganesh Patri (Sacred leaves)", "Haldi (Turmeric)", "Flowers", "5 Types of Fruits", "Nariyal (Coconut)", "Supari", "Panchamrut", "Laung", "Elaichi", "Chandan", "Mauli", "Kapur", "Sindoor", "Gangajal", "Gulab jal", "Janeu", "Gulal", "Chawal", "Gnehu", "Kalash", "Mithai (Modak)", "Laal Kapda", "Kachha Dhudh"],
      "key": ["The festival is celebrated by families and friends more over in public places and also in their", "The celebrations involves in keeping Ganesh idol under temporary shrines with group of worship.", "For removal of obstacles in the way of success.", "Deity Worshiped: Lord Ganapathi"]
    };
    setTimeout(() => {
    this.percent = this.poojaService[0].Pooja_Discounted_Price * 100 / this.poojaService[1].Pooja_Discounted_Price;
      this.percent = parseFloat(this.percent).toFixed(1);
      this.percent = 100 - this.percent
    }, 100)
  }
  closeOverlay() {
    this.isBookingOverlayOpend = false;
    document.querySelector("body").classList.remove("body-overflow-hide");
  }
  bookNow() {
    this.isBookingOverlayOpend = true;
    document.querySelector("body").classList.add("body-overflow-hide");
  }
}
