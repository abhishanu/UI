import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import {TempleDonationsComponent} from './temple-donations/temple-donations.component';
import { TempleDetailsComponent } from './temple-details/temple-details.component';
import { PoojaServiceListingComponent } from './pooja-service-listing/pooja-service-listing.component';
const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'temple-donations', component: TempleDonationsComponent },
    { path: ':state/:city/temple-details/:templeName/:templeAddress/:id', component: TempleDetailsComponent },
    { path: 'search-result/:searchTxt', component: SearchResultComponent },
    { path: 'pooja-services', component: PoojaServiceListingComponent },
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent,TempleDonationsComponent,SearchResultComponent];