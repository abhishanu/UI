import { Component, Input,ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
 
@Component({
  selector: 'tabs',
  templateUrl: './tabs.html'
})
export class TabsComponent {
    @Input('tablist') tablist: any;
    @Input('tabtype') tabtype:any;
    @Input('justified') justified:any;
    @ViewChild('staticTabs') staticTabs: TabsetComponent;
    private featuredImageList:any=[];
    private upcomingImageList:any=[];
    private trendingImageList:any=[];
    private aboutpandits:any;
    private pujaList:any=[{"puja":"Satyanarayan Puja"},{"puja":"Griha Pravesh Puja"},{"puja":"Vivah Puja"},{"puja":"Ganpati Puja"},{"puja":"Most Common Pujas"},{"puja":"Bhoomi Puja"},{"puja":"Gauri Puja"},{"puja":"Maha Mrityunjaya Jaap"},{"puja":"Rudrabhishek Puja"},{"puja":"Dhanteras Puja  "},{"puja":"Laxmi Puja  "},{"puja":"KaalSarp puja"},{"puja":"Navratri Puja"},{"puja":"Durga Puja"},{"puja":"Engagement Puja"},{"puja":"New business"},{"puja":"Shiv Puja"},{"puja":"Krishna Puja"},{"puja":"Other Puja"},{"puja":"Mata ki Chowki"},{"puja":"Sarswati Puja"},{"puja":"Laghu Rudra Puja"},{"puja":"Hanuman Chalisa Paath"},{"puja":"Akhand Ramayan Paath"},{"puja":"Sundarkand Paath"},{"puja":"Vishnu Sahasranama"},{"puja":"Mangal Dosh Nivaran"},{"puja":"Pitra Dosh Nivaran"},{"puja":"Shani Dosh Nivaran"},{"puja":"Mool Shanti Puja"},{"puja":"Namkaran Puja"},{"puja":"Maha Shivratri Puja"},{"puja":"Ganpati Sthapna"},{"puja":"Annaprashan Puja"},{"puja":"Birthday Puja"},{"puja":"Mundan Puja"},{"puja":"Other Puja"},{"puja":"Shradh Puja"}];
    private available:any=[{"day":"Monday","time":"10:00 - 17:30"},{"day":"Tuesday","time":"08:00 - 17:30"},{"day":"Wednesday","time":"10:00 - 17:30"},{"day":"Thursday","time":"10:00 - 17:30"},{"day":"Friday","time":"10:00 - 17:30"},{"day":"Saurday","time":"10:00 - 17:30"},{"day":"Sunday","time":"10:00 - 17:30"}];
    constructor(){
        
    }   
    ngOnInit(){
        this.featuredImageList = [
          {
          "src": "../../assets/events/colture-rec-img.jpg",
          "title": "Maa Ganga Aarti",
          "location": "Varanasi Ghat",
          "date":"5th March"
      },
      {
        "src": "../../assets/events/event-1.jpg",
        "title": "9 Days Navratri Anusthan with Khetri",
         "location": "Kalash Stahpana",
          "date":"15th March"
      },
      {
       "src": "../../assets/events/event-2.jpg",
        "title": "Group Navratri puja.",
         "location": "Vaishno Dham",
          "date":"18th"
      },
      {
        "src": "../../assets/events/event-3.jpg",
        "title": "9 Days Durga Sahasranamam Puja for Ultimate Luck",
         "location": "Varanasi Ghat",
          "date":"25th March"
      },
      {
        "src": "../../assets/events/event-4.jpg",
        "title": "Kanya Pujan on Ashtami or Navami.",
         "location": "Kalash Stahpana",
          "date":"25th March & 26th Mar"
      },
      {
        "src": "../../assets/events/event-5.jpg",
        "title": "Shani Dosha Nivaran puja at Shani Shingnapur",
         "location": "Shingnapur",
          "date":"17th March"
      },
      {
        "src": "../../assets/events/event-6.jpg",
        "title": "Offer Tel Abhishekam at Shani Shingnapur to Appease Sat",
         "location": "Shingnapur",
          "date":"21st March"
      }

    ];

     this.upcomingImageList = [
      {
        "src": "../../assets/events/event-4.jpg",
        "title": "Kanya Pujan on Ashtami or Navami: 25th March & 26th Mar.",
        "location": "Shingnapur",
        "description": "this is a test description for the title"
      },
      {
        "src": "../../assets/events/event-5.jpg",
        "title": "Shani Dosha Nivaran puja at Shani Shingnapur: 17th Mar",
        "location": "Shingnapur",
        "description": "this is a test description for the title"
      },
      {
        "src": "../../assets/events/event-6.jpg",
        "title": "Offer Tel Abhishekam at Shani Shingnapur to Appease Sat",
        "location": "Shingnapur",
        "description": "this is a test description for the title"
      },
      {
        "src": "../../assets/events/event-1.jpg",
        "title": "9 Days Navratri Anusthan with Khetri, Kalash Stahpana",
        "location": "Shingnapur",
        "description": "this is a test description for the title"
      },
      

    ];


    this.trendingImageList = [
          {
          "src": "../../assets/events/colture-rec-img.jpg",
          "title": "This is a test title for image",
          "location": "Shingnapur",
          "description": "this is a test description for the title"
      },
      
      {
        "src": "../../assets/events/event-5.jpg",
        "title": "Shani Dosha Nivaran puja at Shani Shingnapur: 17th Mar",
        "location": "Shingnapur",
        "description": "this is a test description for the title"
      },
      {
        "src": "../../assets/events/event-6.jpg",
        "title": "Offer Tel Abhishekam at Shani Shingnapur to Appease Sat",
        "location": "Shingnapur",
        "description": "this is a test description for the title"
      },
      {
        "src": "../../assets/events/event-1.jpg",
        "title": "9 Days Navratri Anusthan with Khetri, Kalash Stahpana",
        "location": "Shingnapur",
        "description": "this is a test description for the title"
      },{
       "src": "../../assets/events/event-2.jpg",
        "title": "Group Navratri puja (18th March to 26th March)",
        "location": "Shingnapur",
        "description": "this is a test description for the title"
      },
      {
        "src": "../../assets/events/event-3.jpg",
        "title": "9 Days Durga Sahasranamam Puja for Ultimate Luck",
        "location": "Shingnapur",
        "description": "this is a test description for the title"
      },
      {
        "src": "../../assets/events/event-4.jpg",
        "title": "Kanya Pujan on Ashtami or Navami: 25th March & 26th Mar.",
        "location": "Shingnapur",
        "description": "this is a test description for the title"
      },
      

    ];

    this.aboutpandits = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Monc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. tor wisi et urna. Aliquam erat volutpat.";
     
    }
    selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true;
  }
    

}