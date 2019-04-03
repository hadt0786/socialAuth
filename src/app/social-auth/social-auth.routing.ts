// inbuilt Angular modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [

  {
    path: '', component: SignInComponent
  },
  {
    path: 'user', component: UserComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SocialAuthRouting { }
