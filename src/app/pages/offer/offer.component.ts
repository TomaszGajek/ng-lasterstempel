import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../service/wordpress.service';
import { Title }     from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  public loaded:Boolean=false;
  public offer:[]=[];
  public offerCount:number=null;
  public offerRow:number[]=[];

  constructor(private wordpressService: WordpressService, private titleService: Title, private route: ActivatedRoute) {}

  ngOnInit() {

    this.wordpressService.requestDataForOffer().subscribe(
      response=>{
        this.loaded = true;
        this.offer = response[0];
        this.offerCount = Math.ceil(response[0].length / 6);

        for(let i:number=1;i<=this.offerCount;i++){ this.offerRow.push(i); }  

        this.route.params.subscribe(params=>{
          this.titleService.setTitle(`Laser Stempel - Usługi`);
        })
        
      }
    )

  }

}
