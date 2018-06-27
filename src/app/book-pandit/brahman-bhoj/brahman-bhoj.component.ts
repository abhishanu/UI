import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-brahman-bhoj',
  templateUrl: './brahman-bhoj.component.html'
})
export class BrahmanBhojComponent implements OnInit {
request: any = {};
  constructor(private _commonService: CommonService) {this._commonService.updateBreadCrumb([
      {
        "path": "/book-pandit/bhoj",
        "label": "Brahmin Caterers Services"
      },
    ]); }

  ngOnInit() {
  }

}
