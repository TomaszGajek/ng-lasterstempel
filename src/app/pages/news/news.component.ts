import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../service/wordpress.service';
import { Title }     from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public news:any;
  public aside:any;
  public loaded:boolean = false;

  constructor(private wordpressService: WordpressService,private titleService: Title, private route: ActivatedRoute) {}

  ngOnInit() {
    this.wordpressService.requestDataForNews().subscribe(response=>{
        this.news = response[0];
        this.aside = response[1];
        this.loaded = true;

        this.route.params.subscribe(params=>{
          this.titleService.setTitle(`Laser Stempel - ${this.news.title.rendered}`);
        })

    })


  }

  
}
