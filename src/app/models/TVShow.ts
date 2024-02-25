import { Movie } from './movie';

export type TVShow = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TVShowDto = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};

export function mapToMovies(tvShows: TVShow[]): Movie[] {
  return tvShows.map((tvshow: TVShow) => {
    return {
      ...tvshow,
      title: tvshow.name,
      original_title: tvshow.original_name,
    };
  });
}
