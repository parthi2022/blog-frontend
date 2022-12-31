import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.css']
})
export class ManagePostsComponent {
  
  posts:any;
  userRole:any=localStorage.getItem("userRole");
  
  userId:any=Number(localStorage.getItem("userId"));
  constructor(private service:PostapiService,private router:Router)
  {
    if(this.userRole=="ADMIN")
  {
    this.service.getAllPosts().subscribe(
      response => {
        console.log(response);
        this.posts=response;
      }
    );
  }
  else
  {
    this.service.getPostsByUserId(this.userId).subscribe(
      response => {
        console.log(response);
        this.posts=response;
      }
    );
    }
  }

  deletePost(postId:any)
  {
    if(confirm('Do you really want to delete this post?'))
    {
     this.service.deletePost(postId).subscribe(
      response => {alert('post deleted!!');}
      
    );
    }


   
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['signin']);
    
  }
}
