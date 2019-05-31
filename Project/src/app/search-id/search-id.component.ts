import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-id',
  templateUrl: './search-id.component.html',
  styleUrls: ['./search-id.component.scss']
})
export class SearchIdComponent implements OnInit {
  response = undefined;
  searchIdInput : string;

  constructor(private square: ApiService) { }

  ngOnInit() {
  }

  searchById(){
    console.log(this.searchIdInput)
    this.square.GetById(this.searchIdInput).subscribe(
      (x) => {
        console.log(x);
        this.response=x;
      }
    );
  }
}
