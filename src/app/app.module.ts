import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgxCarouselModule } from 'ngx-carousel';
import { BannerCarouselComponent } from './common/banner.carousel';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { AlertModule ,ModalModule,TabsModule,TooltipModule,TypeaheadModule,ProgressbarModule,AccordionModule,BsDatepickerModule } from 'ngx-bootstrap';
import { PrettyUrlPipe } from './Pipes/prettyUrl.pipe';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { ModalComponent } from './common/modal/modal.component';
import { AlertComponent } from './common/alert.component';
import { TabsComponent } from './common/tabs/tabs.component';
import { BookPanditComponent } from './home/book-pandit/book-pandit.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CommonService } from './services/common.service';
import { RequestService } from './services/request.service';
import { TempleDonationsComponent } from './home/temple-donations/temple-donations.component';
import { CuratedExperiencesComponent } from './home/curated-experiences/curated-experiences.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { LightboxModule } from 'angular2-lightbox';
import { AudioVideoComponent } from './home/audio-video/audio-video.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HomePoojaServiceComponent } from './home/home-pooja-service/home-pooja-service.component';
import { GauSewaComponent } from './home/gau-sewa/gau-sewa.component';
import { BlogComponent } from './home/blog/blog.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { CalendarComponent } from './common/Calendar/calendar';
import { LoaderComponent } from './common/loader.component';
import { TempleDetailsComponent } from './temple-details/temple-details.component';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { PopularAcrossIndiaComponent } from './templates/popular-across-india/popular-across-india.component';
import {WhyUsComponent} from './home/why-us/why-us.component';
import { NguiMapModule} from '@ngui/map';
import { MapOverlayComponent } from './templates/map-overlay/map-overlay.component';
import { NearByTempleComponent } from './templates/near-by-temple/near-by-temple.component';
import { HistoryComponent } from './temple-details/history/history.component';
import { PhotosComponent } from './temple-details/photos/photos.component';
import { DonationComponent } from './temple-details/donation/donation.component';
import { ExpertComponent } from './temple-details/expert/expert.component';
import { PoojaServiceComponent } from './temple-details/pooja-service/pooja-service.component';
import { EventsFestivalsComponent } from './temple-details/events-festivals/events-festivals.component';
import { PoojaServiceListingComponent } from './pooja-service-listing/pooja-service-listing.component';
import { LoginComponent } from './login/login.component';

import {LeftNavComponent  } from './dashboard/left.nav';
import { CartDetailComponent } from './dashboard/cart-detail/cart-detail.component';
import {AmountConverterPipe} from './Pipes/amount.converter';
import { SearchPipeModule } from './Pipes/search-filter';
import { CreditComponent } from './dashboard/credit/credit.component';
import { WishListComponent } from './dashboard/wish-list/wish-list.component';
import { AccountDetailComponent } from './dashboard/account-detail/account-detail.component';
import { ServicesPoojaComponent } from './book-pandit/pandit-detail/services-pooja/services-pooja.component';
import { SpecializationComponent } from './book-pandit/pandit-detail/specialization/specialization.component';
import { AwardsComponent } from './book-pandit/pandit-detail/awards/awards.component';
import { OverviewComponent } from './book-pandit/pandit-detail/overview/overview.component';
import { ReviewsComponent } from './book-pandit/pandit-detail/reviews/reviews.component';
import { CartComponent } from './dashboard/cart/cart.component';
import { BrahmanBhojComponent } from './book-pandit/brahman-bhoj/brahman-bhoj.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    BannerCarouselComponent,
    ModalComponent,
    AlertComponent,
    TabsComponent,
    BookPanditComponent,
    TempleDonationsComponent,
    CuratedExperiencesComponent,
    AppFooterComponent,
    GalleryComponent,
    routedComponents,
    AudioVideoComponent,
    SearchResultComponent,
    HomePoojaServiceComponent,
    GauSewaComponent,
    CalendarComponent,
    BlogComponent,
    FeedbackComponent,
    TempleDetailsComponent,
    BreadcrumbComponent,
    PopularAcrossIndiaComponent,
    WhyUsComponent,
    MapOverlayComponent,
    NearByTempleComponent,
    PrettyUrlPipe,
    LoaderComponent,
    HistoryComponent,
    PhotosComponent,
    DonationComponent,
    ExpertComponent,
    PoojaServiceComponent,
    EventsFestivalsComponent,
    PoojaServiceListingComponent,
    LoginComponent,    SearchPipeModule,
    LeftNavComponent, CartDetailComponent,AmountConverterPipe, CreditComponent, WishListComponent, AccountDetailComponent, ServicesPoojaComponent, SpecializationComponent, AwardsComponent, OverviewComponent, ReviewsComponent, CartComponent, BrahmanBhojComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgxCarouselModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    ProgressbarModule.forRoot(),
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    LightboxModule,
    AppRoutingModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDyhs7KydbC9ws3jx_OoC3w0tZ1IYdNOHk'})    
  ],
  providers: [CommonService,RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
