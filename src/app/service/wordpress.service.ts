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
    let main = this.httpClient.get(`${this.baseUrl}/wp-json/wp/v2/pages/32`);
    let offer = this.httpClient.get(`${this.baseUrl}/wp-json/wp/v2/uslugi`);

    return forkJoin([main_menu,options,main,offer]);
  }



}
