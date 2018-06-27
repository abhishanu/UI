import { Component, OnInit,Input } from '@angular/core';

import { RequestService } from '../../services/request.service';
@Component({
  selector: 'detail-pooja-service',
  templateUrl: './pooja-service.component.html'
})
export class PoojaServiceComponent implements OnInit {
  @Input() poojaService;
  constructor(private _requestService: RequestService) { }

  ngOnInit() {
   
  }

}
