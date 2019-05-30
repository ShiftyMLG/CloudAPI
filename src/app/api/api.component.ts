import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { isNgTemplate } from '@angular/compiler';
import { favourite } from '../favourite';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  response = undefined;
  location="Antwerp"
  constructor(private square: ApiService) { }

  ngOnInit() {
    this.square.GetTrending(this.location).subscribe(
      (x) => {
        console.log(x);
        this.response=x;
      }
    );
  }

  search(){
    this.square.GetTrending(this.location).subscribe(
      (x) => {
        console.log(x);
        this.response=x;
      }
    );
  }

  
}
