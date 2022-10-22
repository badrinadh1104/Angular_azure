import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../_model/movie';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(public service: RestService, public router: Router) { }
  moviesList: Movie[] = []
  cmovie = new Movie();
  ngOnInit(): void {
    this.service.getmovies().subscribe(d => { this.moviesList = d }, e => console.log(e));
  }

  searchvalue: string = "";

  search() {
    console.log(this.searchvalue);
    if (this.searchvalue == "") {
      this.ngOnInit();
    } else {
      this.moviesList = this.moviesList.filter(res => {
        return res.title.toLowerCase().match(this.searchvalue + '+');
      })
    }

  }

  updatetitle(name: string, id: number) {
    this.service.getmoviebyId(id).subscribe(d => { console.log(d); this.cmovie = d; this.cmovie.title = name; this.service.updatemovie(this.cmovie).subscribe(d => { console.log("updated"); this.ngOnInit() }, e => console.log("error")); }
      , e => console.log(e));


  }

  deletemovie(id: number) {
    this.service.deletemovie(id).subscribe(d => { console.log("Deleted"); this.ngOnInit() }, f => console.log(f));
  }

}
