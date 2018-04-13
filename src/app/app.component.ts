import { Component,HostListener } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  scrollTopVisible:any=false;
@HostListener("window:scroll", [])
  onWindowScroll() {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if(top > 500){
      this.scrollTopVisible = true;
    }
    else{
      this.scrollTopVisible = false;
    }
  }
  ngOnInit() {
   
    
  }
  backtoTop(event){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
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
