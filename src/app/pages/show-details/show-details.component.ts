import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IMAGE_SIZES, imageBaseUrl } from 'src/app/constants/images-size';
import { Movie } from 'src/app/models/movie';
import { Video } from 'src/app/models/video';
import { Image } from 'src/app/models/image';
import { MoviesService } from 'src/app/services/movies.service';
import { Actor } from 'src/app/models/credits';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
  showId = 0;
  imageSize = IMAGE_SIZES;
  show$: Observable<Movie> | null = null;
  showVideos$: Observable<Video[]> | null = null;
  showImages$: Observable<Image[]> | null = null;
  showActors$: Observable<Actor[]> | null = null;

  constructor(
    private router: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.showId = params['id'];
    });

    //this.showId = this.router.snapshot.params['id'];
    this.show$ = this.movieService.getMovieById(this.showId);
    this.showVideos$ = this.movieService.getMovieVideosById(this.showId);
    this.showImages$ = this.movieService.getMovieImagesById(this.showId);
    this.showActors$ = this.movieService.getMovieCredits(this.showId);
  }
}
