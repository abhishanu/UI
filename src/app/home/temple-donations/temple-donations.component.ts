import { Component, OnInit, Renderer } from '@angular/core';

@Component({
    selector: 'home-temple-donations',
    templateUrl: './temple-donations.component.html'
})
export class TempleDonationsComponent implements OnInit {
    private temples: any = [];
    private trending:any;
    constructor(private renderer: Renderer) { }

    ngOnInit() {
        this.temples = [
            {
                "name": "Mahabaleshwar Temple",
                "city": "Gokarna",
                "thumb": "/assets/temples/1.jpg"
            },
            {
                "name": "Sri Ranganathaswamy Temple",
                "city": "Srirangam",
                "thumb": "/assets/temples/Ranganathaswamy.jpg"
            },
            {
                "name": "Jagannath Temple",
                "city": "Puri",
                "thumb": "/assets/temples/jagannath.jpg"
            },
            {
                "name": "Ramaswamy Temple",
                "city": "Kumbakonam",
                "thumb": "/assets/temples/Ramaswamy.jpg"
            },
            {
                "name": "Mahabaleshwar Temple",
                "city": "Gokarna",
                "thumb": "/assets/temples/1.jpg"
            },
            {
                "name": "Sri Ranganathaswamy Temple",
                "city": "Srirangam",
                "thumb": "/assets/temples/Ranganathaswamy.jpg"
            },
            {
                "name": "Jagannath Temple",
                "city": "Puri",
                "thumb": "/assets/temples/jagannath.jpg"
            },
            {
                "name": "Ramaswamy Temple",
                "city": "Kumbakonam",
                "thumb": "/assets/temples/Ramaswamy.jpg"
            }
        ];
        this.trending = ["Shri Krishn Janambhumi","Dwarkadeesh Temple","Prem Mandir","Ramaswamy Temple","Sri Ranganathaswamy Temple","Mahabaleshwar Temple","Jagannath Temple"]
    }

    private showDetails(event){
        let siblings = event.currentTarget.parentElement.children;
        for(let i = 0; i < siblings.length; i++){
            siblings[i].className= "";
        }
        event.currentTarget.className = "active";
    }
}
