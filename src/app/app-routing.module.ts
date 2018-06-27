import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import {TempleDonationsComponent} from './temple-donations/temple-donations.component';
import { TempleDetailsComponent } from './temple-details/temple-details.component';
import { PoojaServiceListingComponent } from './pooja-service-listing/pooja-service-listing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './dashboard/cart/cart.component';
import{BookPanditComponent} from './book-pandit/book-pandit.component';
import { PanditDetailComponent } from './book-pandit/pandit-detail/pandit-detail.component';
import { BrahmanBhojComponent } from './book-pandit/brahman-bhoj/brahman-bhoj.component';
const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'temple-donations', component: TempleDonationsComponent },
     { path: 'user-cart', component: CartComponent },
    { path: 'my', component: DashboardComponent,children: [
        { path: 'temple-history', component: DashboardComponent,outlet:"admin" },
    ] },
    { path: ':state/:city/temple-details/:templeName/:templeAddress/:id', component: TempleDetailsComponent },
    { path: 'search-result/:searchTxt', component: SearchResultComponent },
    { path: 'pooja-services', component: PoojaServiceListingComponent },
    { path: 'book-pandit', component: BookPanditComponent },
    { path: ':city/pandit-detail/:panditName/:id', component: PanditDetailComponent },
    {path:'book-pandit/bhoj',component:BrahmanBhojComponent},
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent,TempleDonationsComponent,SearchResultComponent,DashboardComponent,BookPanditComponent,PanditDetailComponent,BrahmanBhojComponent,CartComponent];