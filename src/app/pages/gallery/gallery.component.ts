import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { WordpressService } from '../../service/wordpress.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private _albums:any[] = [];
  public aside:any;
  public changed:any[]=[];
  public loaded:Boolean = false;

  constructor(private _lightbox: Lightbox,private wordpressService: WordpressService) {}

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
      }
    )
  }
}
