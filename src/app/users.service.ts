import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'localhost:3030'
  constructor(
    private _http: HttpClient
  ) { }
  getOneUser(uname: string){
    return this._http.get(this.url+'/api/'+ uname)
  }
  createUser(userData: object){
    console.log("hitting the service --> ", userData)
    return this._http.post(this.url+'/api/user/create', userData)
    // return console.log(userData)
  }
}
