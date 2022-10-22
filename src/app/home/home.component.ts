import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../_model/movie';
import { User } from '../_model/user';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http: HttpClient, public service: RestService) { }
  moviesList: Movie[] = [];
  favourites: Movie[] = [];
  user: User = new User();
  fav = false;
  i: number = 0;
  ngOnInit(): void {
    this.user = this.service.getuser();
    console.log(this.service.getuser())
    this.service.getmovies().subscribe(data => {
      this.moviesList = data, console.log(data)
    }, err => console.log("error"));
  }

  favourite(movie: Movie) {
    console.log("fav")
    console.log(movie)
    console.log(this.user)
    this.favourites = this.user['favourites'];
    for (this.i = 0; this.i < this.favourites.length; this.i++) {
      if (this.favourites[this.i].id == movie.id) {
        this.fav = true;
      }
    }

    if (!this.fav) {
      this.favourites.push(movie);
      this.service.addtofav(this.user).subscribe(d => console.log(d), e => console.log(e));
    } else {
      console.log("already added to favourite")
    }

  }

}
