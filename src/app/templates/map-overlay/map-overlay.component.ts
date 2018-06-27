import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { RequestService } from '../../services/request.service';
@Component({
  selector: 'map-overlay',
  templateUrl: './map-overlay.component.html',  
  styles: [
    `
      .custom-icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color:blue;
        border: 2px solid white;
        color:white;
        font-size:20px;
        text-align:center;
      }
    `]
})
export class MapOverlayComponent implements OnInit {
isMapOverlayOpend:any=false;
heading:any;
marker = {
    display: true,
    lat: null,
    lng: null,
  };
mapHeight:any;
centerAddress:string;
positions:any=[];
  constructor(private _CommonService:CommonService, private _requestService: RequestService) { }

  ngOnInit() {
    this._CommonService.mapOverlayHandler.subscribe(options => {
      this.centerAddress = options.current;
      this.positions = options.list;
      this.heading = options.heading;
     this.isMapOverlayOpend=true;
     document.querySelector("body").classList.add("body-overflow-hide");
    });
    this.mapHeight = document.documentElement.clientHeight
  }
closeOverlay(){
  this.isMapOverlayOpend = false;
   document.querySelector("body").classList.remove("body-overflow-hide");
}
clicked({target: marker},index) {
    

    marker.nguiMapComponent.openInfoWindow('iw'+index, marker);
  }

}

