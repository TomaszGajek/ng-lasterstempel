import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { Options } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() menu;
  @Input() options;

  constructor() {}

  ngOnInit() {

  }

  ngOnChanges(){
    
  }
  

}
