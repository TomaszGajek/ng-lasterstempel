import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './pages/start/start.component';
import { AboutComponent} from './pages/about/about.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
  {path:'', component:StartComponent},
  {path:'o-nas',component: AboutComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
