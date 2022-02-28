import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'http://localhost:3030'
  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }
  getOneUser(uname: string){
    return this._http.get(this.url+'/api/'+ uname)
  }
  createUser(userData: object){
    return this._http.post(this.url+'/api/user/create', userData)
      // Write subscribe logic to reroute the newly created User to login
      .subscribe((result)=> {
        console.log(result)
        this._router.navigate(['/login'])
      })
  }
  logUserIn(user: object) {
    return this._http.post<object>(this.url, user)
      .subscribe(response => console.log(response))
  }
}
