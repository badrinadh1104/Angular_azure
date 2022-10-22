import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from '../_model/user';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: RestService, public router: Router) { }
  user = new User();
  userlist: User[] = [];
  msg: string = ""
  flag: Boolean = false;
  ngOnInit(): void {

    this.service.getusers().subscribe(d => { this.userlist = d; console.log(this.userlist) }, e => console.log(e));
  }
  login() {
    for (let i of this.userlist) {
      if (this.user.username === i.username && this.user.password === i.password) {
        this.flag = true;
        this.user = i;
        this.service.setuser(i);
      }
    }
    if (this.flag) {
      this.service.setemail(this.user.email);
      this.service.setroles(this.user.role);
      // this.service.setuser(this.user);
      console.log("Logged in Success");
      if (this.user.role === "ROLE_USER") {
        console.log("user");
        this.router.navigateByUrl('/home')
      } else {
        this.router.navigateByUrl('/admindash');
      }
    } else {
      this.user.username = "";
      this.user.password = "";
      this.msg = "Inavalid Login Credentials"
    }
  }



  public isLoggedin() {
    return this.service.isLoggedin();
  }

}
