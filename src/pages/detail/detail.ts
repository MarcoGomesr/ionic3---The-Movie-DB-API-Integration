import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieProvider} from "../../providers/movie/movie";
import {YoutubeVideoPlayer} from "@ionic-native/youtube-video-player";

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  imgPath = 'https://image.tmdb.org/t/p/original/';
  movie: any;
  movieDetails: any;
  backdrop_path: any;
  geners: any;
  videos: any = [];
  Budget: any;
  status: any;
  revenue: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public movieProvider: MovieProvider, private youtube: YoutubeVideoPlayer) {
    this.movie = this.navParams.get('movie');
    this.backdrop_path = this.movie['backdrop_path'];
    this.getMovie(this.movie.id);
    this.loadVideos(this.movie.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  getMovie(movieID) {
    this.movieProvider.getMovieDetails(movieID).subscribe(movieDetails => {
      this.movieDetails = movieDetails;
      this.geners = this.movieDetails['geners'];
      console.log(this.geners);
      this.Budget = this.movieDetails['budget'];
      this.revenue = this.movieDetails['revenue'];
      this.status = this.movieDetails['status'];
    });
  }

  loadVideos(movieID){
    this.movieProvider.getVideos(movieID).subscribe(videos => {
      this.videos = videos['results'];
    });
  }

  openVideo(videoID){
    this.youtube.openVideo(videoID);
  }

}
