import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() menu;
  @Input() options;

  public openNav:Boolean = false;

  constructor() {}

  ngOnInit() {
    
  }

  toggleNav(){
    this.openNav =!this.openNav;
  }
  closeNav(){
    this.openNav = false;
  }


  

}
