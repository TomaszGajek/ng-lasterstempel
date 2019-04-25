import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { WordpressService } from '../../service/wordpress.service';
import { Title }     from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private _albums:any[] = [];
  public aside:any;
  public gallery: any;
  public changed:any[]=[];
  public loaded:Boolean = false;

  constructor(private _lightbox: Lightbox,private wordpressService: WordpressService, private titleService: Title, private route: ActivatedRoute) {}

  open(index: number): void {
    this._lightbox.open(this.changed, index);
  }

  close(): void {
    this._lightbox.close();
  }

  ngOnInit() {
    this.wordpressService.requestDataForGallery().subscribe(
      response=>{
        this.loaded=true;
        this.aside = response[1];
        this.gallery = response[0];
        this._albums = response[0].acf.gallery;
        this._albums.map((elem)=>{
            const src = elem.url;
            const thumb = elem.url;
            const album = {
                src,
                thumb
            }
            this.changed.push(album)
        });

        this.route.params.subscribe(params=>{
          this.titleService.setTitle(`Laser Stempel - ${this.gallery.title.rendered}`);
        })

      }
    )
  }
}
