import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './component/add-post/add-post.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { ManageCommentsComponent } from './component/manage-comments/manage-comments.component';
import { ManagePostsComponent } from './component/manage-posts/manage-posts.component';
import { ManageUsersComponent } from './component/manage-users/manage-users.component';
import { PostSearchComponent } from './component/post-search/post-search.component';
import { PostsCategoryComponent } from './component/posts-category/posts-category.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { SinglePostComponent } from './component/single-post/single-post.component';
import { UpdateCommentComponent } from './component/update-comment/update-comment.component';
import { UpdatePostComponent } from './component/update-post/update-post.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
   },

   {
    path : 'home',
    component: HomeComponent
   },

 {
  path : 'signup',
  component: SignupComponent
 },
 
 {
  path : 'signin',
  component: SigninComponent
 },
 {
  path : 'dashboard',
  component: DashboardComponent
 },
 {
  path : 'category/:categoryId',
  component: PostsCategoryComponent
 },
 {
  path : 'search',
  component: PostSearchComponent
 },
 {
  path : 'post/:postId',
  component: SinglePostComponent
 },
 {
  path : 'manage-posts',
  component: ManagePostsComponent
 },
 {
  path : 'manage-comments',
  component: ManageCommentsComponent
 },

 {
  path : 'manage-users',
  component: ManageUsersComponent
 },
 {
  path : 'add-post',
  component: AddPostComponent
 },
 {
  path : 'update-post/:postId',
  component: UpdatePostComponent
 },
 {
  path : 'update-comment/:commentId',
  component: UpdateCommentComponent
 },





];


@NgModule({
  imports: [ RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [ RouterModule ]
  })
export class AppRoutingModule { }
