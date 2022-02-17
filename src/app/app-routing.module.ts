import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainContentComponent} from "./main-content/main-content.component";
import {ExploreComponent} from "./explore/explore.component";
import {FollowingComponent} from "./following/following.component";

const routes: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'following', component: FollowingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
