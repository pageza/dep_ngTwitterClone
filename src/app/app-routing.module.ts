import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainContentComponent} from "./main-content/main-content.component";
import {ExploreComponent} from "./explore/explore.component";
import {FollowingComponent} from "./following/following.component";
import {FollowersComponent} from "./followers/followers.component";
import {SinglePostComponent} from "./single-post/single-post.component";

const routes: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'following', component: FollowingComponent},
  { path: 'followers', component: FollowersComponent},
  { path: 'home/:id', component: SinglePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
