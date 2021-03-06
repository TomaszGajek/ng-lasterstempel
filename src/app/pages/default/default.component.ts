import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { WordpressService } from '../../service/wordpress.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public loaded:Boolean = false;
  public page:any;
  public aside:any;
  public empty:Boolean=false;

  constructor(private wordpressService: WordpressService, private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      
      this.wordpressService.requestDataforDefault(params.id).subscribe(response=>{
        if(response[0].length <= 0 ){
          this.empty = true;
          this.loaded=true;
          this.aside = response[1];
          this.titleService.setTitle(`Laser Stempel - 404`);
        } else {
          this.loaded=true;
          this.page = response[0];
          this.aside = response[1];
          this.titleService.setTitle(`Laser Stempel - ${this.page[0].title.rendered}`);
        }

        
      })

    })
  }

}
