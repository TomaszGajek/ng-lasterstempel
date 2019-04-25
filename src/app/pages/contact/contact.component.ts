import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../service/wordpress.service';
import { Title }     from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contact:any;
  public aside:any;
  public loaded:Boolean = false;

  constructor(private wordpressService: WordpressService,private titleService: Title, private route: ActivatedRoute) {}

  ngOnInit() {
    this.wordpressService.requestDataForContact().subscribe(response=>{
      this.loaded=true;
      this.contact = response[0];
      this.aside = response[1];

      this.route.params.subscribe(params=>{
        this.titleService.setTitle(`Laser Stempel - ${this.contact.title.rendered}`);
      })

    })
  }

}
