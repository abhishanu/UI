import { Component, OnInit,Input } from '@angular/core';
import { RequestService } from '../../../services/request.service';
@Component({
  selector: 'pandit-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent {
  @Input() PanditAvgRating;
  @Input() reviews;
  @Input() association;
  @Input() schedule;
  data: any;
  awards: any;
  totalReview:any;
  ReviewOverview:any;
  summeryReview:any=[];
  ReviewInDetail:any=[];
  associationData:any=[];
  persentReview:any;
  constructor(private _requestService: RequestService) { }

  ngOnInit() {
    
     setTimeout(()=>{ 
       this.PanditAvgRating = parseFloat(this.PanditAvgRating).toFixed(1);
       this.ReviewOverview = this.reviews.ReviewOverview;
       this.ReviewInDetail = this.reviews.ReviewInDetail[0];
       this.schedule = this.schedule;
       this.associationData = this.association[0];
       this.persentReview = (this.PanditAvgRating * 100)/5+"%";
     this.totalReview = this.ReviewOverview["Total_reviews"];
     this.summeryReview.push({
        "value": Math.round((this.ReviewOverview[5] / this.totalReview) * 100  * 10)/10,
        "text": "Excellent"
      },
        {
          "value": Math.round((this.ReviewOverview[4] / this.totalReview) * 100  * 10)/10,
          "text": "Very Good"
        },
        {
          "value": Math.round((this.ReviewOverview[3] / this.totalReview) * 100  * 10)/10,
          "text": "Average"
        },
        
        {
          "value": Math.round((this.ReviewOverview[2] / this.totalReview) * 100  * 10)/10,
          "text": "Poor"
        },{
          "value": Math.round((this.ReviewOverview[1] / this.totalReview) * 100  * 10)/10,
          "text": "Terrible"
        })},2000);
    
    this.data = {
      'rating': "4",
      "src": "../assets/pandit/pandit-1.jpg",
      "chat": true,
      "withitems": true,
      "whatsapp": true,
      "inperson": true,
      "awards": [{
        'awardName': "First Award"
      }, {
        'awardName': "Secont Award"
      }],
      'association': {
        "panditRole": "R K Shridhar is a full time missionary. He is the main pandit of Sri Radha Krishna temple.",
        "templesrc": "../assets/temples/Ranganathaswamy-banner.jpg",
        "templeName": "Sri Radha Krishna temple",
        "templeAddress": "Hare Krishna Hill",
        "templeDetail": "ISKCON Bangalore is a charitable society with the objective of propagating Krishna Consciousness all over the world, as explained by Srila Prabhupada, whose teachings are based on Bhagavad-gita and Srimad Bhagavatam."
      }
    }
    this.awards = "Panditji recieved " + this.data.awards.length + " awards.";
  }

}
