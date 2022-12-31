import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  postId:any;
  post:any;
  category:any;
  comments:any;
  
  loginStatus:any=localStorage.getItem("loginStatus");
  constructor(
     private activatedRoute:ActivatedRoute,
     private router:Router, 
     private service:PostapiService  )
  {
    this.postId = this.activatedRoute.snapshot.params['postId'];
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }


  ngOnInit() {

    this.service.getSinglePost( this.postId).subscribe(
      (response) => {
        console.log(response); 
        this.post=response;
        this.category=response.category.categoryName;
      }
    );
    
      this.service.getCommentsForPost(this.postId).subscribe(
        (response) => {
          console.log(response); 
          this.comments=response;
          
        }
      );
    }

    addComment(comment:any,postId:any)
    {
    
      this.service.addComment(postId,Number(localStorage.getItem("userId")),{'content':comment}).subscribe(
        (response) => { 
          alert('comment Added!!');
          console.log(response);
          window.location.reload();
          this.ngOnInit() }
      );
    }
}
