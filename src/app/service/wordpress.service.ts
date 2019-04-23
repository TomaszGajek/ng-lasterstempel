import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WordpressService {
  baseUrl:string = 'http://laser.devnoveo.pl/wp';

  constructor(private httpClient: HttpClient) { }

  public requestDataFromMultipleSources(): Observable<any[]> {
    let main_menu = this.httpClient.get(`${this.baseUrl}/wp-json/menus/v1/menus/primary`);
    let options = this.httpClient.get(`${this.baseUrl}/wp-json/acf/v3/options/options`);
    let footer_menu = this.httpClient.get(`${this.baseUrl}/wp-json/menus/v1/menus/footer`);
    
    return forkJoin([main_menu,options,footer_menu])
  }

  public requestDataForStart(): Observable<any[]> {

    let main = this.httpClient.get(`${this.baseUrl}/wp-json/wp/v2/pages/32`);
    let offer = this.httpClient.get(`${this.baseUrl}/wp-json/wp/v2/uslugi?per_page=100`);

    return forkJoin([main,offer]);
  }

  public requestDataFromMenu(): Observable<any[]>{
    let main_menu = this.httpClient.get(`${this.baseUrl}/wp-json/menus/v1/menus/primary`);
    let options = this.httpClient.get(`${this.baseUrl}/wp-json/acf/v3/options/options`);

    return forkJoin([main_menu,options])
  }

  public requestDataForAboutPage(): Observable<any>{
    let about = this.httpClient.get(`${this.baseUrl}/wp-json/wp/v2/pages/34`);
    
    return forkJoin([about])
  }

  public requestDataForOffer(): Observable<any[]> {

    let offer = this.httpClient.get(`${this.baseUrl}/wp-json/wp/v2/uslugi?per_page=100`);

    return forkJoin([offer]);
  }



}
