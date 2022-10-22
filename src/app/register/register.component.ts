import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: RestService, public router: Router) { }
  user = new User();
  userslist: User[] = [];
  userexist: Boolean = false;
  msg: string = "";
  i: number = 0
  ngOnInit(): void {
    this.service.getusers().subscribe(d => {
      this.userslist = d;
      console.log(d)
    }, e => console.log(e));
  }
  register() {
    for (this.i = 0; this.i < this.userslist.length; this.i++) {
      console.log(this.userslist[this.i]);
      if (this.user.username == this.userslist[this.i]['username'] && this.user.email == this.userslist[this.i]['email']) {
        this.userexist = true;
      }
    }
    console.log("Userexists ststus" + this.userexist);
    if (!this.userexist) {
      this.userexist = false;
      this.user.id = this.userslist.length + 1
      this.service.saveUser(this.user).subscribe(d => { console.log(d); console.log("Registred"); this.router.navigateByUrl(''); }, e => console.log("error"));
    }
    else {
      this.user.email = ""
      this.user.username = ""
      this.msg = "Check the Email and Username"
      alert("Username and email Should be Unique")
    }
  }

}
