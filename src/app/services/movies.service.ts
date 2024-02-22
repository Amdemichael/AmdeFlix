import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDto } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '52e3200582daea5c719f691e2e943b30';
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MovieDto>(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
    );
  }

  getUpcomingMovies() {
    return this.http.get<MovieDto>(
      `${this.apiUrl}/movie/upcoming?api_key=${this.apiKey}`
    );
  }

  getTopRatedMovies() {
    return this.http.get<MovieDto>(
      `${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`
    );
  }
}
