import { Component, OnInit, Input } from '@angular/core';
import { Lightbox, LightboxConfig } from 'angular2-lightbox';
import { RequestService } from '../../services/request.service';
@Component({
  selector: 'temple-detail-photos',
  templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnInit {
  @Input() gallery;
  images: any;
  videos: any;
  constructor(private _requestService: RequestService, private _lighboxConfig: LightboxConfig, private _lightbox: Lightbox) { }

  ngOnInit() {
    setTimeout(()=>{ 
      this.images = this.gallery.Images;
      this.videos = this.gallery.Videos;
    });
  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.gallery.Images, index, { showImageNumberLabel: true, disableScrolling: true, centerVertically: true });
  }

}
