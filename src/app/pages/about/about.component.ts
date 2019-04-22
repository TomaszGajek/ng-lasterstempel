import { Component, OnInit, OnChanges } from '@angular/core';
import { WordpressService } from '../../service/wordpress.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public about:any;
  public loaded:boolean = false;

  constructor(private wordpressService: WordpressService) {}


  ngOnInit() {
    this.wordpressService.requestDataForAboutPage().subscribe(
      response=>{
        this.loaded = true;
        this.about = response[0];       
      }
    );
  }


}
