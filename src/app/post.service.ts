import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private _http: HttpClient
  ) { }
  // TODO: Create a database call to get all the posts from the logged in user
  getAllPosts(){

  }
  // Create a database call to get single post from any user
  getOnePost(postID: number){
    return this._http.get('/api/' + postID)
  }
  // TODO: Create database call to get all posts from any user
  getAllPostsFromOneUser(){

  }


}
