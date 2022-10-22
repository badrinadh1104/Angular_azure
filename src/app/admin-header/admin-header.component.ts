import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(public service: RestService, public router: Router) { }
  user: User = new User();
  ngOnInit(): void {
    this.user = this.service.getuser();
  }
  public logout() {
    alert("LoggedOut SuccessFully")
    this.router.navigate([''])
    this.service.setuser(new User());
    this.service.clear();
  }

  public isLoggedin() {
    return this.service.isLoggedin();
  }



}
