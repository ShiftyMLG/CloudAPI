import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import { ToolbarComponent } from './toolbar/toolbar.component';

import {CardModule} from 'primeng/card';
import { ApiComponent } from './api/api.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PlaceComponent } from './api/place/place.component';
import { ItemComponent } from './favourites/item/item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ApiComponent,
    HomeComponent,
    SearchComponent,
    LoginComponent,
    SearchIdComponent,
    FavouritesComponent,
    PlaceComponent,
    ItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
