import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../user';


import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private _router: Router,
    private userService: UserService) { }



  // Authentication Functionality

  userRenderData: any; // user render data in user component

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {

        this.userRenderData = userData;

        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData
        // ...

        if (userData.token) {
          let user = User.getUserByJSON(userData);
          localStorage.setItem('user', JSON.stringify(user));

          this._router.navigate(['user']);
          this.userService.googleFormPost(userData).subscribe(data => {
            console.log(data, " from the api response");
          }, err => {
            console.log(err);
          })

        }
      }
    ).catch(err => {

      this._router.navigate(['']);
    });
  }

  // logic for login - Sign in And Sign Up form

  profileEnable = false;
  signinVisible = true; // check if token is there in localstorage

  loginForm = false;
  createAccountForm = true;
  logInFormEnabled(data) {
    if (data === 'login') {
      this.createAccountForm = false;

      this.loginForm = true;
    }
    else if (data === 'SignUp') {
      console.log("sign up");
      this.loginForm = false;
      this.createAccountForm = true;

    }

  }

  ngOnInit() {
  }
}




