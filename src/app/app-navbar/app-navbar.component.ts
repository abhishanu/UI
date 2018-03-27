import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
liveFeedsItems:any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.liveFeedsItems = [
      {
        "poster":"../assets/videos/video-1.jpg",
        "desc":"Mahabaleshwar Temple"
      },
      {
        "poster":"../assets/videos/video-2.jpg",
        "desc":"Ramaswamy Temple"
      },{
        "poster":"../assets/videos/video-3.jpg",
        "desc":"Jagannath Temple"
      },{
        "poster":"../assets/videos/video-4.jpg",
        "desc":"Sri Ranganathaswamy Temple"
      }
    ]
  }
  searchText(e){
    let keycode = e.keycode || e.which;
    
    if(keycode == 13){
      this.router.navigate(['search-result',e.target.value]); 
    }
  }
  openSearch(e){
    let parentElem = e.target.parentElement;
    let nextElem = parentElem.nextElementSibling;
    if(nextElem.classList.contains("display-flex")){
      nextElem.classList.remove("display-flex");
    }
    else{
      nextElem.classList.add("display-flex");
    }
  }
  openSideMenu(e){
    let parentElem = e.target.parentElement.parentElement;
    let nextElem = parentElem.nextElementSibling;
    if(nextElem.classList.contains("mobile-menu") && nextElem.classList.contains("hide-on-body")){
      nextElem.classList.remove("mobile-menu","hide-on-body","hide-elem");
    }
    else{
      nextElem.classList.add("mobile-menu","hide-on-body");
      nextElem.classList.remove("hide-elem");
    }
  }
}
