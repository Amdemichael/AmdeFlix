import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { ShowDetailsComponent } from './pages/show-details/show-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'details/:id', component: ShowDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
