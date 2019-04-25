import { Component, OnInit, OnChanges } from '@angular/core';
import { WordpressService } from '../../service/wordpress.service';
import { Title }     from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public about:any;
  public aside:any;
  public loaded:boolean = false;

  constructor(private wordpressService: WordpressService,private titleService: Title, private route: ActivatedRoute) {}


  ngOnInit() {
    this.wordpressService.requestDataForAboutPage().subscribe(
      response=>{
        this.loaded = true;       
        this.about = response[0];  
        this.aside = response[1];

        this.route.params.subscribe(params=>{
          this.titleService.setTitle(`Laser Stempel - ${this.about.title.rendered}`);
        })

      }
    );
  }


}
