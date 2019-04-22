import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WordpressService } from './service/wordpress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Laser Stempel';

  public loaded:boolean = false;
  public main_menu:any;
  public footer_menu:any;
  public options:any;


  

  constructor(private wordpressService: WordpressService) {}

  ngOnInit(){
    this.wordpressService.requestDataFromMultipleSources().subscribe(response=>{
      this.main_menu = response[0]
      this.options = response[1];
      this.footer_menu = response[2];
      this.loaded = true;
    });

  }

}
