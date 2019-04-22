import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../service/wordpress.service';
import { SwiperConfigInterface, SwiperScrollbarInterface } from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  public start:any;
  public loaded:boolean = false;
  public slides:[] = [];

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

  constructor(private wordpressService: WordpressService) {}

  ngOnInit() {
    this.wordpressService.requestDataForStart().subscribe(
      response => {
        this.loaded = true;
        this.start = response[0];
        this.slides = response[0].acf.main_slider
      }
    )
  }

}
