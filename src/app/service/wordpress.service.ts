import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class WordpressService  {
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
    let aside_menu = this.httpClient.get(`${this.baseUrl}/wp-json/menus/v1/menus/aside`);
    
    return forkJoin([about,aside_menu])
  }

  public requestDataForOffer(): Observable<any[]> {
    let offer = this.httpClient.get(`${this.baseUrl}/wp-json/wp/v2/uslugi?per_page=100`);

    return forkJoin([offer]);
  }

  public requestDataForGallery():Observable<any[]>{
    let gallery = this.httpClient.get(`${this.baseUrl}/wp-json/wp/v2/pages/38`);
    let aside_menu = this.httpClient.get(`${this.baseUrl}/wp-json/menus/v1/menus/aside`);

    return forkJoin([gallery,aside_menu]);
  }

  public requestDataForOfferSingle(data):Observable<any[]>{

    let offerSingle = this.httpClient.get(`${this.baseUrl}/wp-json/wp/v2/uslugi?slug=${data}`);
    let aside_menu = this.httpClient.get(`${this.baseUrl}/wp-json/menus/v1/menus/aside`);

    return forkJoin([offerSingle,aside_menu]);
  }
  
  public requestDataForContact():Observable<any[]>{
    let contact = this.httpClient.get(`${this.baseUrl}/wp-json/wp/v2/pages/40`);
    let aside_menu = this.httpClient.get(`${this.baseUrl}/wp-json/menus/v1/menus/aside`);
    return forkJoin([contact,aside_menu]);
  }

  public requestDataForNews():Observable<any[]>{
    let news = this.httpClient.get(`${this.baseUrl}/wp-json/wp/v2/pages/160`);
    let aside_menu = this.httpClient.get(`${this.baseUrl}/wp-json/menus/v1/menus/aside`);

    return forkJoin([news,aside_menu]);
  }

  public requestDataforDefault(data):Observable<any[]>{

    let page = this.httpClient.get(`${this.baseUrl}/wp-json/wp/v2/pages/?slug=${data}`);
    let aside_menu = this.httpClient.get(`${this.baseUrl}/wp-json/menus/v1/menus/aside`);

    return forkJoin([page,aside_menu]);
  }



}