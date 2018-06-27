import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { trigger, state, animate, transition, style, query, stagger } from '@angular/animations';
import { RequestService } from '../services/request.service';
@Component({
    selector: 'temple-donations',
    templateUrl: './temple-donations.component.html',
    /*animations: [
        trigger('listAnimation', [
            transition('* => *', [
                query('.temple-list,.across-india .item', style({ transform: 'translateY(100%)' })),
                query('.temple-list,.across-india .item',
                    stagger('200ms', [
                        animate('900ms', style({ transform: 'translateY(0)' }))
                    ])),

            ])
        ])
    ]*/
})
export class TempleDonationsComponent implements OnInit {
    acrossTemples: any;
    poojaServices: any;
    templeList: any = [];
    rangeValue: any = '0';
    params: any = {};
    services: any = [];
    city: any = [];
    private appliedFilters: any = [];
    constructor(private _commonService: CommonService, private _requestService: RequestService) {
        this.city.push(this._commonService.currentCity);
        this.params = {
            "requestType": "filter",
            "requestParam": {
                "cityNames": this.city,
                "serviceNames": this.services
            }
        }

    }
    range(event) {
        this.rangeValue = event.target.value;
    }
    getTemples() {
        this._commonService.showLoader();
        this._requestService.postData("getTemplesByFilters", this.params).subscribe(data => {
            this.templeList = data.json();
            this._commonService.hideLoader();
        }, err => {
            this._commonService.showHttpErrorMsg();
        });
    }
    ngOnInit() {

        this.getTemples();
        this._requestService.fetchData("getAllPoojaServices").subscribe(data => {

            this.poojaServices = data.json();
        }, err => {
            this._commonService.showHttpErrorMsg();
        });
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

        this._requestService.postData("getTemplesByFilters", {
            "requestType": "filter",
            "requestParam": {
                "cityNames": ["All"]
            }
        }).subscribe(data => {
            this.acrossTemples = data.json();

        }, err => {
            this._commonService.showHttpErrorMsg();
        });

    }
    viewOnMap(currentTemple) {
        this._commonService.openMapOverlay({
            "current": currentTemple,
            "list": this.templeList,
            "heading": "Temples in Delhi-NCR and NearBy"
        });
    }

    private setFilters($event, filterName, service) {
        /*if ($event.currentTarget && $event.currentTarget.checked && filterName !== "") {
            this.appliedFilters.push({ "filterName": filterName, "filterData": service });
        } else {
            for (var i = 0; this.appliedFilters.length; i++) {
                if ((filterName !== "" && this.appliedFilters[i].filterName == filterName || filterName == "") && this.appliedFilters[i].filterData == service) {
                    this.appliedFilters.splice(i, 1);
                }
            }
        }*/
        if ($event.currentTarget && $event.currentTarget.checked) {
            this[filterName].push(service);
        } else {
            let index;

            index = this[filterName].indexOf(service);
            this[filterName].splice(index, 1);
        }
        this.getTemples();
    }

}
