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

  getMoviesByType(type: string) {
    return this.http.get<MovieDto>(
      `${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`
    );
  }
}
