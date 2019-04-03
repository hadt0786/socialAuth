import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from './../user';
import {
  AuthService,

} from 'angular-6-social-login';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private _router: Router, private _userService: UserService, private authService: AuthService) {
  }

  logout() {

    localStorage.removeItem('user');
    this.authService.signOut();

    this._router.navigate(['']);

  }

  renderUserData: any;
  ngOnInit() {
    // console.table(localStorage.getItem('user'));

    this.renderUserData = this._userService.userRenderData
    // console.log(this.renderUserData, " render data ");
  }

}
