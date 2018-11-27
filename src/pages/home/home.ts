import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieProvider} from "../../providers/movie/movie";
import {DetailPage} from "../detail/detail";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';
  constructor(public navCtrl: NavController, public movie: MovieProvider) {
    this.loadLetest();
  }

  loadLetest(){
    this.movie.getMovies().subscribe(movies => {
      this.moviesArray = movies['results'];
    });
  }

  onEvent(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    if(val.length !== 0){
      this.movie.searchMovie(val).subscribe(movies => {
        this.moviesArray = movies['results'];
      });
    } else {
      this.loadLetest();
    }
  }

  getDetails(movie){
    this.navCtrl.push(DetailPage, {'movie': movie});
  }
}
