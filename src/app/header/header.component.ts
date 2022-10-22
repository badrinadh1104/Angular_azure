import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public service: RestService) { }
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
