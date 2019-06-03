import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Keys } from './Keys';
import { favourite, PutReturn } from './favourite';
import { LoginService } from './login.service';
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
  searchIdInput : string;
  pageLength : number;
  page : number;

  constructor(private http: HttpClient, private auth: LoginService) {
    this.keys = new Keys()
    this.clientId = this.keys.client_id;
    this.clientSecret = this.keys.client_secret;
    this.searchQuerry = "search"
    this.trendingQuerry = "trending"

   }

   GetHeader(){
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.id}`
      })
    }
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

   GetById(idInput: string): Observable<any> {
     console.log(idInput)
     this.url = `https://api.foursquare.com/v2/venues/${idInput}?client_id=${this.clientId}&client_secret=${this.clientSecret}&v=20190523`
     return this.http.get(this.url)
   }

   GetFavourites(page : number, pageSize : number): Observable<any> {
     this.url = `http://178.62.225.237:8080/api/v1/favourites/?page=${page}&length=${pageSize}`
     return this.http.get(this.url, this.GetHeader())
   }
   GetFavouriteById(Id : string): Observable<any> {
    this.url = 'http://178.62.225.237:8080/api/v1/favourites/'
    return this.http.get(this.url + Id, this.GetHeader())
  }

   PostFavourite(place : favourite){
     this.url = 'http://178.62.225.237:8080/api/v1/favourites'
     return this.http.post(this.url, place, this.GetHeader())
   }
   DeleteFavourite(Id : number){
     this.url= 'http://178.62.225.237:8080/api/v1/favourites/'
     return this.http.delete(this.url + Id, this.GetHeader())
   }

   PutFavourite(Id: number, item: PutReturn){
     this.url='http://178.62.225.237:8080/api/v1/favourites/'
     console.log(this.url + Id)
     return this.http.put(this.url + Id, item, this.GetHeader())
   }

   GetFiltered(tag: string){
    this.url='http://178.62.225.237:8080/api/v1/favourites?tag='
    return this.http.get(this.url + tag, this.GetHeader())
  }
}
