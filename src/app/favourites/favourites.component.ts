import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  response = undefined;
  search = undefined;
  searchIdInput : string;
  nameInput : string;
  searchTagInput : string;
  page : number = 0;
  pageSize: number = 5;
  options : number[] = [5, 10, 25, 50]

  constructor(private square: ApiService) { }

  ngOnInit() {
    this.square.GetFavourites(this.page, this.pageSize).subscribe(
      (x) => {
        console.log(x);
        this.response=x;
      }
    );
  }
  searchById(){
    this.square.GetFavouriteById(this.searchIdInput).subscribe(
      (x) => {
        console.log(x);
        this.response=undefined;
        this.search=x;
      }
    );
  }

  ShowAll(){
    this.square.GetFavourites(this.page, this.pageSize).subscribe(
      (x) => {
        console.log(x);
        this.search=undefined;
        this.response=x;
      }
    );
  }

  Reload(event : Event){
    this.ngOnInit();
  }  

  searchByTag(){
    this.square.GetFiltered(this.searchTagInput).subscribe(
      (x) => {
        console.log(x);
        this.response=x;
        this.search = undefined;
      }
    )
  }
  PrevPage(){
    if(this.page != 0){
      this.page--;
      this.ShowAll();
    }
  }
  NextPage(){
    this.page++;
    this.ShowAll();
  }
}