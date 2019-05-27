import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  response = undefined;
  searchInput:string;
  searchInputCity="Antwerp"
  
  constructor(private square: ApiService) { }

  ngOnInit() {
  }

  search(){
    console.log(this.searchInputCity)
    this.square.GetSearch(this.searchInput, this.searchInputCity).subscribe(
      (x) => {
        console.log(x);
        this.response=x;
      }
    );
  }
}
