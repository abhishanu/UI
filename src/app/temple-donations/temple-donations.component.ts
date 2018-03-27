import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
@Component({
    selector: 'temple-donations',
    templateUrl: './temple-donations.component.html'
})
export class TempleDonationsComponent implements OnInit {
    acrossTemples: any;
    templeList:any;
    filters: any;
    private appliedFilters: any = [];
    constructor(private _commonService: CommonService) {
    }
    ngOnInit() {
        
        this.filters = [
            {
                "filterName": "services", "filterData": ["Satyanarayan Puja", "Griha Pravesh Puja", "Vivah Puja", "Ganpati Puja", "Most Common Pujas", "Bhoomi Puja", "Gauri Puja", "Maha Mrityunjaya Jaap", "Rudrabhishek Puja", "Dhanteras Puja  ", "Laxmi Puja  ", "KaalSarp puja", "Navratri Puja", "Durga Puja", "Engagement Puja", "New business", "Shiv Puja", "Krishna Puja", "Other Puja", "Mata ki Chowki", "Sarswati Puja", "Laghu Rudra Puja", "Hanuman Chalisa Paath", "Akhand Ramayan Paath", "Sundarkand Paath", "Vishnu Sahasranama", "Mangal Dosh Nivaran", "Pitra Dosh Nivaran", "Shani Dosh Nivaran", "Mool Shanti Puja", "Namkaran Puja", "Maha Shivratri Puja", "Ganpati Sthapna", "Annaprashan Puja", "Birthday Puja", "Mundan Puja", "Other Puja", "Shradh Puja"]
            }, {
                "filterName": "nearby_location", "filterData": ["Agra", "Mathura", "Bharatpur", "Vrindavan", "Haridwar"]
            }, {
                "filterName": "popular_cities", "filterData": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Visakhapatnam", "Indore", "Thane", "Bhopal", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Coimbatore", "Agra", "Madurai"]
            }, {
                "filterName": "upcoming_events", "filterData": ["event 1","event 2","event 3","event 4"]
            }
        ]
        this._commonService.updateBreadCrumb([
            {
                "path": "/temple-donations",
                "label": "Temple Donation"
            },
            {
                "path": "",
                "label": "Temple List"
            }
        ]);
        this.templeList = [
            {
                "id": "1",
                "name": "Mahabaleshwar Temple",
                "address": "Koti Teertha Road, Kotiteertha",
                "state": "Karnataka",
                "city": "Gokarna",
                "thumb": "../assets/temples/1.jpg",
                "distance":"2Kms from city center",
                "gods":["Surya","Vishnu","Krishna"],
                "certified":true,
                "needs":[
                    {
                        "name":"Food",
                        "value":"30000"
                    },
                    {
                        "name":"Construction",
                        "value":"1200000"
                    },{
                        "name":"Bhandara",
                        "value":"25000"
                    }
                ],
                "services":"Shiva Pooja, Vishnu Pooja, Engagement Pooja, Namkaran, Shanti Pooja, Marriage rituals"
            },
            {
                "id": "2",
                "name": "Sri Ranganathaswamy Temple",
                "address": "Srirangam",
                "state": "Tamil Nadu",
                "city": "Tiruchirappalli",
                "thumb": "../assets/temples/Ranganathaswamy.jpg",
                "distance":"412Kms from city center",
                "gods":["Shiva","Vishnu","Krishna","Durga"],
                "services":"Shiva Pooja, Vishnu Pooja, Engagement, Shanti Pooja, Marriage rituals"
            },
            {
                "id": "3",
                "name": "Laxminarayan Temple",
                "address": "Mandir Marg, Near Gole market",
                "state": "New Delhi",
                "city": "New Delhi",
                "thumb": "../assets/temples/jagannath.jpg",
                "distance":"22Kms from city center",
                "gods":["Surya","Vishnu","Krishna"],
                "services":"Shiva Pooja, Vishnu Pooja, Engagement, Shanti Pooja, Marriage rituals"
            },
            {
                "id": "4",
                "name": "Ramaswamy Temple",
                "address": "",
                "state": "Tamil Nadu",
                "city": "Rameswaram",
                "thumb": "../assets/temples/Ramaswamy.jpg",
                "distance":"22Kms from city center",
                "gods":["Surya","Vishnu","Krishna"],
                "certified":true,
                "needs":[
                    {
                        "name":"Food",
                        "value":"30000"
                    },
                    {
                        "name":"Construction",
                        "value":"1200000"
                    },{
                        "name":"Bhandara",
                        "value":"25000"
                    }
                ],
                "services":"Shiva Pooja, Vishnu Pooja, Engagement, Shanti Pooja, Marriage rituals"
            },
            {
                "id": "5",
                "name": "Mahabaleshwar Temple",
                "address": "Koti Teertha Road, Kotiteertha",
                "state": "Karnataka",
                "city": "Gokarna",
                "thumb": "../assets/temples/1.jpg",
                "distance":"2Kms from city center",
                "gods":["Surya","Vishnu","Krishna"],
                "certified":true,
                "services":"Shiva Pooja, Vishnu Pooja, Engagement Pooja, Namkaran, Shanti Pooja, Marriage rituals"
            },
            {
                "id": "6",
                "name": "Sri Ranganathaswamy Temple",
                "address": "Srirangam",
                "state": "Tamil Nadu",
                "city": "Tiruchirappalli",
                "thumb": "../assets/temples/Ranganathaswamy.jpg",
                "distance":"12Kms from city center",
                "gods":["Surya","Vishnu","Krishna"],
                "services":"Shiva Pooja, Engagement Pooja, Namkaran, Shanti Pooja, Marriage rituals"
            },
            {
                "id": "7",
                "name": "Jagannath Temple",
                "address": "",
                "state": "Odisha",
                "city": "Puri",
                "thumb": "../assets/temples/jagannath.jpg",
                "distance":"12Kms from city center",
                "gods":["Surya","Vishnu","Krishna"],
                "services":"Shiva Pooja, Engagement Pooja, Namkaran, Shanti Pooja, Marriage rituals"
            },
            {
                "id": "8",
                "name": "Ramaswamy Temple",
                "address": "Sarangapani South Street, Valayapettai Agraharam",
                "state": "Tamil Nadu",
                "city": "Kumbakonam",
                "thumb": "../assets/temples/Ramaswamy.jpg",
                "distance":"12Kms from city center",
                "gods":["Surya","Vishnu","Krishna"],
                "services":"Shiva Pooja, Engagement Pooja, Namkaran, Shanti Pooja, Marriage rituals"
            }
        ];
        //this.viewOnMap("Koti Teertha Road, Kotiteertha, Gokarna, Karnataka");

    }
    viewOnMap(currentTemple){
        this._commonService.openMapOverlay({
            "current":currentTemple,
            "list":this.templeList,
            "heading":"Temples in Delhi-NCR and NearBy"
        });
    }

    private setFilters($event, filterName, service){
        if($event.currentTarget && $event.currentTarget.checked && filterName !== ""){            
            this.appliedFilters.push({"filterName":filterName,"filterData":service});
        }else{
            for(var i=0;this.appliedFilters.length;i++){
                if(( filterName !== "" && this.appliedFilters[i].filterName == filterName ||  filterName == "") && this.appliedFilters[i].filterData == service){
                    this.appliedFilters.splice(i,1);
                }
            }
        }
        console.log(this.appliedFilters);
    }

}
