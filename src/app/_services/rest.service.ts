import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../_model/movie';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) { }
  user = new User();


  // to get all movies
  public getmovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(" http://localhost:3000/Movies");
  }
  public getuser() {
    return this.user
  }
  public setuser(user: User) {
    this.user = user;
  }



  // to register user

  public saveUser(user: User) {
    return this.http.post("http://localhost:3000/Users", user);
  }
  public getusers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3000/Users");
  }
  // to save to localstoarge
  public setroles(role: string) {
    localStorage.setItem('role', role)
  }

  public getroles() {
    return localStorage.getItem('role');
  }

  public setemail(email: string) {
    localStorage.setItem('email', email);
  }
  public getemail() {
    return localStorage.getItem('email');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedin() {
    return this.getemail() && this.getroles();
  }

  public rolematch(role: string): boolean {
    let ismatch = false;
    const userrole = this.getroles();
    if (userrole === role) {
      ismatch = true;
      return ismatch;
    } else {
      return ismatch;
    }

  }

  public addtofav(user: User) {
    return this.http.put(`http://localhost:3000/Users/${user.id}`, user);
  }

  public deletefav(id: number) {
    return this.http.delete(`http://localhost:3000/Users/${id}`)
  }

  public savemovie(movie: Movie) {
    return this.http.post("http://localhost:3000/Movies", movie);
  }

  public updatemovie(movie: Movie) {
    return this.http.put(`http://localhost:3000/Movies/${movie.id}`, movie);
  }
  public deletemovie(id: number) {
    return this.http.delete(`http://localhost:3000/Movies/${id}`);
  }
  public getmoviebyId(id: number): Observable<Movie> {
    return this.http.get<Movie>(`http://localhost:3000/Movies/${id}`);
  }

}
