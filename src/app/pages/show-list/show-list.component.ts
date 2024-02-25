import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieDto } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
})
export class ShowListComponent implements OnInit {
  showList$: Observable<MovieDto> | null = null;
  searchValue = '';

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.getPagedShows(1);
  }

  getPagedShows(page: number, searchKeyWord?: string) {
    this.showList$ = this.movieService.searchMovies(page, searchKeyWord);
  }

  searchChange() {
    this.getPagedShows(1, this.searchValue);
  }

  onPageChange(event: any) {
    const pageNumber = event.page ? event.page + 1 : 1;
    console.log(pageNumber);
    this.getPagedShows(pageNumber, this.searchValue);
  }
}
