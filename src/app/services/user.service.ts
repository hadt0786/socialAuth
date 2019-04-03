import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  userRenderData: any;

  googleFormPost(body: any) {

    this.userRenderData = body;
    //  console.log(body, "inside body of service");
    return this._http.post('http://localhost:3000/user', body, {
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  // sending data from sign in to User component


  //user data
  renderDataUser() {
    return this.userRenderData;
  }

  // rendering ends


}
