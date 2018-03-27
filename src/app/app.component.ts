import { Component } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
   
    
  }
  hideOnBodyClick(e){    
    let currentTarget = e.target;
    if(!currentTarget.classList.contains("open-on-body")){
      let hideElem = document.querySelectorAll(".hide-on-body");
      for(var i=0;i<hideElem.length;i++){
        hideElem[i].classList.remove("hide-on-body");
        hideElem[i].classList.add("hide-elem");
      }
    }
  }
}
