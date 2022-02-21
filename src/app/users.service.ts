import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _http: HttpClient
  ) { }
  getOneUser(uname: string){
    return this._http.get('/api/'+ uname)
  }
}
