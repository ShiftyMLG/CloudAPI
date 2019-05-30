import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { favourite } from 'src/app/favourite';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  @Input('place') place;
  constructor(private square: ApiService) { }

  ngOnInit() {
  }


  Add(){
    console.log(this.place)
    const venue : favourite = {
        Name:this.place.name, 
        FsId:this.place.categories[0].id, 
        Address:this.place.location.address, 
        City:this.place.location.city, 
        Image:this.place.categories[0].icon.prefix + "64" + this.place.categories[0].icon.suffix,
        Tag:this.place.categories[0].name}
    this.square.PostFavourite(venue).subscribe(data => {});
  }
}
