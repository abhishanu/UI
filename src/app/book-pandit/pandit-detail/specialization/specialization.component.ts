import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'specialization',
  templateUrl: './specialization.component.html'
})
export class SpecializationComponent{
specialization:any;
  constructor() { }

  ngOnInit() {
    this.specialization = [
      "Astrology Services",
      "Horoscope Specialist",
      "Monthly Horoscopes",
      "Know Future by DOB",
      "Life Consulting and Remedies",
      "Child Birth Astrology",
      "Vashikaran Mantras",
      "Love Psychic Reading"
    ]
  }

}
