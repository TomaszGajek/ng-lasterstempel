import { BrowserModule, Title } from '@angular/platform-browser';
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
import { NewsComponent } from './pages/news/news.component';
import { DefaultComponent } from './pages/default/default.component';



const appRoutes: Routes = [
  {path:'', pathMatch: 'full',component:StartComponent},
  {path:'o-nas',component: AboutComponent},
  {path: 'uslugi',component:OfferComponent},
  {path: 'uslugi/:id',component:OfferSingleComponent},
  {path:'galeria',component:GalleryComponent},
  {path:'kontakt',component:ContactComponent},
  {path:'nowosci',component:NewsComponent},
  {path:':id',component:DefaultComponent}
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
    NewsComponent,
    DefaultComponent,

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
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
