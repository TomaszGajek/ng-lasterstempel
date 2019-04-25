import { Component, OnInit, Input  } from '@angular/core';
import { WordpressService } from '../../../service/wordpress.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-offer-single',
  templateUrl: './offer-single.component.html',
  styleUrls: ['./offer-single.component.scss']
})
export class OfferSingleComponent implements OnInit {

  public loaded:Boolean = false;
  public offerSingle:any;
  public aside:any;

  
  constructor(private wordpressService: WordpressService, private route: ActivatedRoute, private titleService: Title) { }


  ngOnInit() {
    
    this.route.params.subscribe(params=>{
      
      this.wordpressService.requestDataForOfferSingle(params.id).subscribe(response=>{
        this.loaded=true;
        this.offerSingle = response[0];
        this.aside = response[1];
        this.titleService.setTitle(`Laser Stempel - ${this.offerSingle[0].title.rendered}`);
      })



    })
  }

}
