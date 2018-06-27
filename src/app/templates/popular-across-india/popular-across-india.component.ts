import { Component, OnInit,Input } from '@angular/core';
import { RequestService } from '../../services/request.service';
@Component({
  selector: 'popular-across-india',
  templateUrl: './popular-across-india.component.html'
})
export class PopularAcrossIndiaComponent implements OnInit {
  @Input() data;
  constructor(private _requestService:RequestService) { }

  ngOnInit() {
    
  }

}
