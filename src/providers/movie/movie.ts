import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  public baseURL = 'https://api.themoviedb.org/3/';
  public apiKey = 'api_key=aa8b43b8cbce9d1689bef3d0c3087e4d';
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getMovies(){
    const url = this.baseURL + 'discover/movie?sort_by=popularity.desc&' + this.apiKey;
    return this.http.get(url);
  }

  searchMovie(query){
    const url = this.baseURL + 'search/movie?query=' + query +'&' + this.apiKey;
    return this.http.get(url);
  }

  getMovieDetails(movieID){
    const url = this.baseURL + 'movie/' + movieID + '?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }

  getVideos(movieID){
    const url = this.baseURL + 'movie/' + movieID + '/videos?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }

}
