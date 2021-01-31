import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser:any= new BehaviorSubject(null)
  constructor(private _httpClient: HttpClient) {
    let userData = window.sessionStorage.getItem('userToken');
    if (userData != null) {
      this.saveCurrentUser()
    }
   }


  register(formData: object): Observable<any> {
    return this._httpClient.post('https://route-egypt-api.herokuapp.com/signup',formData)
  }

  login(formData: object): Observable<any> {
    return this._httpClient.post('https://route-egypt-api.herokuapp.com/signin', formData)
  }

  saveCurrentUser() {
    let token = window.sessionStorage.getItem('userToken');
    console.log(token)
    let decoded = jwt_decode(token);
    this.currentUser.next(decoded)
    console.log(decoded)
  }

  logOut(tokenValue: string): Observable<any>{
    return this._httpClient.post('https://route-egypt-api.herokuapp.com/signOut', {
      token: tokenValue
    })
  }
}
