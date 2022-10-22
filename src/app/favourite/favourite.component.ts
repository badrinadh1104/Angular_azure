import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../_model/movie';
import { User } from '../_model/user';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(public service: RestService, public router: Router) { }
  moviesList: Movie[] = [];
  i: number = 0;
  user: User = new User();
  userfav: Movie[] = []
  ngOnInit(): void {
    this.user = this.service.getuser();
    this.userfav = this.user['favourites'];
    this.service.getmovies().subscribe(d => { this.moviesList = d }, e => console.log(e));
  }
  Delete(m: Movie) {
    for (this.i = 0; this.i < this.userfav.length; this.i++) {
      if (this.userfav[this.i].id == m.id) {
        this.userfav.splice(this.i, 1);
      }
    }
    this.user.favourites = this.userfav;
    this.service.addtofav(this.user).subscribe(d => console.log("updated"), f => console.log(f));
    this.ngOnInit();

  }


}
