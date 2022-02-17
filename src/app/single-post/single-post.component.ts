import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../post.service";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  postID: any
  post: Object = [{}]

  private postSubscription: any

  constructor(
    private _route: ActivatedRoute,
    private _postService: PostService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe( params => {
      console.log(params['id'])
      this.postID = params['id']
    })
    this.postSubscription = this._postService.getOnePost(this.postID)
      .subscribe( data => {
        this.post = data
      })
  }

}
