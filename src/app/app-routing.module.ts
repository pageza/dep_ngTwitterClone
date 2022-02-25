import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainContentComponent} from "./main-content/main-content.component";
import {ExploreComponent} from "./explore/explore.component";
import {FollowingComponent} from "./following/following.component";
import {FollowersComponent} from "./followers/followers.component";
import {SinglePostComponent} from "./single-post/single-post.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'createUser', component: CreateUserComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: MainContentComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'following', component: FollowingComponent},
  { path: 'followers', component: FollowersComponent},
  { path: 'post/:id', component: SinglePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
