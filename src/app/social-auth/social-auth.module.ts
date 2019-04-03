import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { SocialAuth } from './../config/social-auth';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";

import { UserService } from '../services/user.service';


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider(SocialAuth.facebook().appId)
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(SocialAuth.google().clientId)
      }
      // {
      //   id: LinkedinLoginProvider.PROVIDER_ID,
      //   provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
      // },
    ]
  );
  return config;
}

@NgModule({
  declarations: [SignInComponent, UserComponent],
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  providers: [

    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    { provide: UserService },
  ]
})
export class SocialAuthModule { }
