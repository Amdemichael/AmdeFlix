import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Genre, Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres$: Observable<Genre[]> | null = null;
  show$: Observable<Movie[]> | null = null;
  genreId = '';

  constructor(private service: MoviesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.genreId = params['genreId'];
      this.show$ = this.service.getMoviesByGnres(this.genreId);
    });
    this.genres$ = this.service.getMoviesGenres();
  }

  findByGenre(genreId: string) {
    //this.show$ = this.service.getMoviesByGnres(genreId);
  }
}
