import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Keys } from './Keys';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  keys : Keys;
  clientId : string;
  clientSecret: string;
  url : string; 
  searchQuerry: string;
  trendingQuerry: string;
  searchInputCity : string;

  constructor(private http: HttpClient) {
    this.keys = new Keys()
    this.clientId = this.keys.client_id;
    this.clientSecret = this.keys.client_secret;
    this.searchQuerry = "search"
    this.trendingQuerry = "trending"

    // this.url = `https://api.foursquare.com/v2/venues/${this.searchQuerry}?client_id=${this.clientId}&client_secret=${this.clientSecret}&v=20190523&near=`

   }

   GetTrending(location: String): Observable<any> {
    this.url = `https://api.foursquare.com/v2/venues/${this.trendingQuerry}?client_id=${this.clientId}&client_secret=${this.clientSecret}&v=20190523&near=`
    return this.http.get(this.url+ location);
   }

   GetSearch(searchInput: string, searchInputCity: string): Observable<any> {
     console.log(searchInputCity)
    this.url = `https://api.foursquare.com/v2/venues/${this.searchQuerry}?client_id=${this.clientId}&client_secret=${this.clientSecret}&v=20190523&near=${searchInputCity}&query=`
    return this.http.get(this.url + searchInput);
   }
}
