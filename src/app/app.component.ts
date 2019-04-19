import { Component, OnInit } from '@angular/core';
import { WordpressService } from './service/wordpress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Laser Stempel';

  public main_menu:any;
  public options:any;
  public main:any;
  public offer:any;
  

  constructor(private wordpressService: WordpressService) {}

  ngOnInit(){
    this.wordpressService.requestDataFromMultipleSources().subscribe(response=>{
      this.main_menu = response[0];
      console.log(this.main_menu);
      this.options = response[1];
      console.log(this.options);
      this.main = response[2];
      console.log(this.main);
      this.offer = response[3];
      console.log(this.offer);
    });

  }

}
