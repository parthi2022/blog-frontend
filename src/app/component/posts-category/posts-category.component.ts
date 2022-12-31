import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-posts-category',
  templateUrl: './posts-category.component.html',
  styleUrls: ['./posts-category.component.css']
})
export class PostsCategoryComponent implements OnInit {

  categoryId:any;
  posts:any;
  postTitle:any;

  constructor(
     private activatedRoute:ActivatedRoute,
     private router:Router, 
     private service:PostapiService  )
  {
     this.activatedRoute.paramMap.subscribe(
      (params)=>
      {
        this.categoryId=params.get("categoryId");
        console.log(this.categoryId);
      }
    );
  
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  
  ngOnInit() {
    this.service.postsByCategory(this.categoryId).subscribe(
      (response) => { 
        console.log(response);
        this.posts=response;
        this.postTitle=response[0].category.categoryName;
       
     
      }
    );
    
    

  }

  OnChanges()
  {
    this.ngOnInit;
    window.location.reload();
  }


  


  
}
