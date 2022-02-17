import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  dummyData = [
    {
      name: "Donald Duck",
      postID: 1,
      content: "This is a bunch of dummy data for the post"
    },
    {
      name: "Goofy Jr",
      postID: 4,
      content: "This is a bunch of dummy data for the post"
    },
    {
      name: "Scrooge McDuck",
      postID: 5,
      content: "This is a bunch of dummy data for the post"
    },
    {
      name: "Goofy Dog",
      postID: 6,
      content: "This is a bunch of dummy data for the post"
    },
    {
      name: "Minnie Mouse",
      postID: 7,
      content: "This is a bunch of dummy data for the post"
    },
    {
      name: "Mickey Mouse",
      postID: 8,
      content: "This is a bunch of dummy data for the post"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
