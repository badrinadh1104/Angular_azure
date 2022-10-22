import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  constructor(public service: RestService, public router: Router) { }
 
  ngOnInit(): void {
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
