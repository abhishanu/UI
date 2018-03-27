import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent implements OnInit {
    private feedbackItems:any = [];
    constructor(){

    }

    ngOnInit(){
        this.feedbackItems = [
        {
            "name": "Shrinivas Nathan",
            "title": "Sed ut perspiciatis unde omnis iste natus error sit",
            "comment": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit labor.",
            "image": "../assets/users/user-default.png",
            "rating": 5,
            "location": "Haridwar, Uttrakhand",
        },
        {
            "name": "Deepak Rawat",
            "title": "Sed ut perspiciatis unde omnis iste natus error sit",
            "comment": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.  Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit labor.",
            "image": "../assets/users/user-default.png",
            "rating": 5,
            "location": "Haridwar, Uttrakhand",
        },
        {
            "name": "Gaurav Bhardwaj",
            "title": "Sed ut perspiciatis unde omnis iste natus error sit",
            "comment": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.  Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit labor.",
            "image": "../assets/users/user-default.png",
            "rating": 5,
            "location": "Haridwar, Uttrakhand",
        }
        ];
    }
}