import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'audio',
  template: `
<div class="audio"><div *ngFor="let audio of audioList">{{audio.name}}</div></div>
  `
})
export class AudioComponent implements OnInit {
  audioList:any=[];
  constructor() { }

  ngOnInit() {
    this.audioList = [
      {
        "src":"../assets/poster-1.png",
        "name":"HH Gopal Krishna Goswami Ji Maharaj",
        "date":"22/06/2013",
        "title":"GKG CC Antya Lila 06-51 Chida Dahi Festival"
      },
      {
        "src":"../assets/poster-2.jpg",
        "name":"HG Sundar Gopal Das",
        "date":"06/02/2013",
        "title":"Human life is not for Sense Gratification"
      },
      {
        "src":"../assets/poster-1.png",
        "name":"HH Gopal Krishna Goswami Ji Maharaj",
        "date":"10/06/2014",
        "title":"GKG CC Antya Lila 06-51 More"
      },{
        "src":"../assets/poster-2.jpg",
        "name":"HG Sundar Gopal Das",
        "date":"06/02/2013",
        "title":"Human life is not for Sense Gratification"
      },{
        "src":"../assets/poster-1.png",
        "name":"HH Gopal Krishna Goswami Ji Maharaj",
        "date":"22/06/2013",
        "title":"GKG CC Antya Lila 06-51 Chida Dahi Festival"
      },{
        "src":"../assets/poster-2.jpg",
        "name":"HH Gopal Krishna Goswami Ji Maharaj",
        "date":"10/06/2014",
        "title":"GKG CC Antya Lila 06-51 More"
      }
    ]
  }

}
