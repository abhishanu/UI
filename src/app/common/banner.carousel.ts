import { Component, Input,ViewChild } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
    selector: 'carousel',
    template: `
    <div class="container-fluid banner-carousel" *ngIf="carouselType == 'bannercarousel'">
        <ngx-carousel [inputs]="carouselTile">
            <ngx-tile NgxCarouselItem *ngFor="let Tile of carouselTileItems" [ngStyle]="{'background-image': 'url(' + Tile.src + ')'}">
                <h2>{{Tile.title}}</h2>
                <p>{{Tile.description}}</p>
            </ngx-tile>
            <a NgxCarouselPrev href="javascript:void(0)" class='leftRs'><i class="fas fa-chevron-circle-left"></i></a>
            <a NgxCarouselNext href="javascript:void(0)" class='rightRs'><i class="fas fa-chevron-circle-right"></i></a>
        </ngx-carousel>
    </div>

    <div class="search-carousel" *ngIf="carouselType == 'popularsearches'">
        <div class="section">
            <div class="heading">
                <h3>Popular Searches</h3>
                <p>In New Delhi</p>
            </div>
            <ngx-carousel [inputs]="carouselTile">
                <ngx-tile NgxCarouselItem *ngFor="let Tile of carouselTileItems">
                    <h3 class="ellipsis">{{Tile.heading}}</h3>
                    <p>{{Tile.type}}</p>
                </ngx-tile>
                
                <a NgxCarouselPrev href="javascript:void(0)" class='leftRs'><i class="fas fa-chevron-left"></i></a>
                <a NgxCarouselNext href="javascript:void(0)" class='rightRs'><i class="fas fa-chevron-right"></i></a>
            </ngx-carousel>
        </div>
    </div> 
     <div class="container-fluid shlok-carousel" *ngIf="carouselType == 'shlokcarousel'">
        <ngx-carousel [inputs]="carouselTile">
            <ngx-tile NgxCarouselItem *ngFor="let Tile of carouselTileItems">
               <p><i class="fas fa-quote-left"></i> {{Tile.name}} <i class="fas fa-quote-right"></i></p>
               <h5>{{Tile.source}}</h5>
            </ngx-tile>
            <a NgxCarouselPrev href="javascript:void(0)" class='leftRs  hide-elem'><i class="fas fa-chevron-circle-left"></i></a>
            <a NgxCarouselNext href="javascript:void(0)" class='rightRs  hide-elem'><i class="fas fa-chevron-circle-right"></i></a>
        </ngx-carousel>
    </div>

    <div class="video-carousel" *ngIf="carouselType == 'videos'">
        <video #homeVideo width="100%" height="400" controls controlsList="nodownload"><source [src]="videoSrc" type="video/mp4"></video>
        <ngx-carousel [inputs]="carouselTile">
            <ngx-tile NgxCarouselItem *ngFor="let Tile of carouselTileItems" [ngStyle]="{'background-image': 'url(' + Tile.poster + ')'}" (click)="playVideo(Tile.videosrc)">
                
            </ngx-tile>
            <a NgxCarouselPrev href="javascript:void(0)" class='leftRs'><i class="fas fa-chevron-circle-left"></i></a>
            <a NgxCarouselNext href="javascript:void(0)" class='rightRs'><i class="fas fa-chevron-circle-right"></i></a>
        </ngx-carousel> 
    </div> 

    <div class="puja-services-carousel" *ngIf="carouselType == 'puja-services'">
        <ngx-carousel [inputs]="carouselTile">
            <ngx-tile NgxCarouselItem *ngFor="let Tile of carouselTileItems">
                <div class="puja-img" title="{{Tile.title}}" [ngStyle]="{'background-image': 'url(' + Tile.src + ')'}"></div>
                <div class="puja-detail">
                    <h2>{{Tile.title}}</h2>
                    <p class="desc">{{Tile.description}}</p>
                    <p><span class="price"><i class="fas fa-rupee-sign"></i> <span class="line-through">{{Tile.price}}</span> {{Tile.discounted}}</span> <a class="buy-now">Buy Now</a></p>
                </div>
            </ngx-tile>
            <a NgxCarouselPrev href="javascript:void(0)" class='leftRs'><i class="fas fa-2x fa-chevron-circle-left"></i></a>
            <a NgxCarouselNext href="javascript:void(0)" class='rightRs'><i class="fas fa-2x fa-chevron-circle-right"></i></a>
        </ngx-carousel> 
    </div> 
    <div class="container-fluid gau-sewa-carousel" *ngIf="carouselType == 'gau-sewa'">
        <ngx-carousel [inputs]="carouselTile">
            <ngx-tile NgxCarouselItem *ngFor="let Tile of carouselTileItems" [ngStyle]="{'background-image': 'url(' + Tile.src + ')'}">
               
            </ngx-tile>
            <a NgxCarouselPrev href="javascript:void(0)" class='leftRs hide-elem'><i class="fas fa-chevron-circle-left"></i></a>
            <a NgxCarouselNext href="javascript:void(0)" class='rightRs hide-elem'><i class="fas fa-chevron-circle-right"></i></a>
        </ngx-carousel>
    </div>

    <div class="container-fluid feedbackCarousel" *ngIf="carouselType == 'feedbackCarousel'">
        <ngx-carousel [inputs]="carouselTile">
            <ngx-tile NgxCarouselItem *ngFor="let feedback of carouselTileItems">
                <div class="feedback-body">
                    <img src="{{feedback.image}}"/>
                    <div class="meta clearfix">
                        <p class="comment">
                        <i class="fas fa-quote-left"></i>
                        {{feedback.comment}}
                        <i class="fas fa-quote-right"></i>
                        </p>
                        <p class="location"></p>
                        <div class="rating">
                            <i class="fa-star fa-xs" [ngClass]="feedback.rating == '5' ? 'fas' : 'far'"></i>
                            <i class="fa-star fa-xs" [ngClass]="feedback.rating == '4' || feedback.rating == '5' ? 'fas' : 'far'"></i>
                            <i class="fa-star fa-xs" [ngClass]="feedback.rating == '3' || feedback.rating == '4'  || feedback.rating == '5' ? 'fas' : 'far'"></i>
                            <i class="fa-star fa-xs" [ngClass]="feedback.rating == '2' || feedback.rating == '3' || feedback.rating == '4'  || feedback.rating == '5' ? 'fas' : 'far'"></i>
                            <i class="fas fa-xs fa-star"></i>
                        </div>
                        <h4>{{feedback.name}}</h4>
                        <div class="location">({{feedback.location}})</div>
                    </div>
                </div>
            </ngx-tile>
            <a NgxCarouselPrev href="javascript:void(0)" class='leftRs hide-elem'><i class="fas fa-chevron-circle-left"></i></a>
            <a NgxCarouselNext href="javascript:void(0)" class='rightRs hide-elem'><i class="fas fa-chevron-circle-right"></i></a>
        </ngx-carousel>
    </div>
  `,
})
export class BannerCarouselComponent {
    public carouselTileItems: Array<any>;
    public carouselTile: NgxCarousel;
    public videoSrc:any="../assets/videos/video-1.mp4";
    //private carouselType: any;
    @Input('carouselItems') carouselItems: any;
    @Input('loop') loop: any;
    @Input('grid') grid: any = {};
    @Input('points') points: boolean;
    @Input('interval') interval: number;
    @Input('carouselType') carouselType:any;
    @ViewChild('homeVideo') homeVideo: any;
    
    ngOnInit() {
        this.carouselTileItems = this.carouselItems;
        this.carouselTile = {
            grid: this.grid,
            speed: 400,
            animation: 'lazy',
            interval: this.interval,
            loop: this.loop,
            point: {
                visible: this.points
            },
            load: 2,
            touch: true,
            easing: 'ease'
        }
    }

    ngAfterViewInit(){
        
    }
    playVideo(videoSrc){
        this.videoSrc = videoSrc;
        this.homeVideo.nativeElement.load();
        this.homeVideo.nativeElement.play();
    }
}