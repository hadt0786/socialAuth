import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialAuthRouting } from './social-auth/social-auth.routing';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), SocialAuthRouting],
  exports: [RouterModule]
})
export class AppRoutingModule { }
