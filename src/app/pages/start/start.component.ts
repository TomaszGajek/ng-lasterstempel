import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../service/wordpress.service';
import { SwiperConfigInterface, SwiperScrollbarInterface } from 'ngx-swiper-wrapper';
import { Title }     from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  public start:any;
  public loaded:boolean = false;
  public slides:[] = [];
  public offer:[] = [];
  public offerCount:number=null;
  public offerRow:number[]=[];
 

  public config: SwiperConfigInterface = {
    a11y: true,
    lazy:true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    scrollbar: true,
    navigation: true,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  constructor(private wordpressService: WordpressService, private titleService: Title, private route: ActivatedRoute) {}

  ngOnInit() {
    this.wordpressService.requestDataForStart().subscribe(
      response => {
        this.loaded = true;
          
        this.start = response[0];
        this.slides = response[0].acf.main_slider;
        this.offer = response[1];
        this.offerCount = Math.ceil(response[1].length / 6);
        for(let i:number=1;i<=this.offerCount;i++){ this.offerRow.push(i); }  

        this.route.params.subscribe(params=>{
          this.titleService.setTitle(`Laser Stempel - ${this.start.title.rendered}`);
        })

      }

    )

    
  }

}
