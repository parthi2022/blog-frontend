import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
 
  post:Post | undefined;
  imageUrl: string = "/assets/img/noimage.png";
  fileToUpload: any;
  files:any;
  target:any;

  constructor(private router:Router, private service:PostapiService)
  {

  }


  addPost(postId:any,title:any,content:any,categoryId:any)
  {
    let userId=localStorage.getItem("userId");
    this.service.addPost(postId,title,content,this.files[0],categoryId,userId).subscribe(
      response =>{console.log(response);
       alert('new post added successfully!!');
       window.location.reload();
      }
    );

    //console.log(this.post);
  
  }

  handleFileInput(event: Event) {
    this.target = event.target as HTMLInputElement;
    this.files = this.target.files as FileList;
    //console.log(this.files);
    
  }
}
