import { Component, OnInit } from '@angular/core';
import { Movie } from '../_model/movie';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(public service: RestService) { }
  movie: Movie = new Movie();
  moviesList: Movie[] = [];
  ngOnInit(): void {
    this.service.getmovies().subscribe(d => { this.moviesList = d }, e => console.log(e));
  }
  addmovie() {
    this.movie.id = this.moviesList.length + 1;
    this.service.savemovie(this.movie).subscribe(d => console.log("saved succefully"), f => console.log("Error " + f));
  }
}
