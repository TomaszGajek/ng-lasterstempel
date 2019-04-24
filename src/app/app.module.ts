import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { LightboxModule } from 'ngx-lightbox';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './pages/start/start.component';
import { AboutComponent} from './pages/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { OfferComponent } from './pages/offer/offer.component';
import { OfferSingleComponent } from './pages/offer/offer-single/offer-single.component';



const appRoutes: Routes = [
  {path:'', component:StartComponent},
  {path:'o-nas',component: AboutComponent},
  {path: 'uslugi',component:OfferComponent},
  {path: 'uslugi/:id',component:OfferSingleComponent},
  {path:'galeria',component:GalleryComponent},
  {path:'kontakt',component:ContactComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    GalleryComponent,
    OfferComponent,
    OfferSingleComponent,

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule,
    SwiperModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
