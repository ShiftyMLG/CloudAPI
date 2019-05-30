import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  {path: 'app-api' , component: ApiComponent},
  {path: 'app-home', component: HomeComponent},
  {path: 'app-search', component: SearchComponent},
  {path: 'app-login', component:LoginComponent},
  {path: 'app-search-id', component:SearchIdComponent},
  {path: 'app-favourites', component:FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
