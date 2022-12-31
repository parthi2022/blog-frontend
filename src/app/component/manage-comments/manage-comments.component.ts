import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-manage-comments',
  templateUrl: './manage-comments.component.html',
  styleUrls: ['./manage-comments.component.css']
})
export class ManageCommentsComponent {
  comments:any;
  userRole:any=localStorage.getItem("userRole");
  
  userId:any=Number(localStorage.getItem("userId"));
  constructor(private service:PostapiService,private router:Router)
  {
    if(this.userRole=="ADMIN")
  {
    this.service.getAllComments().subscribe(
      response => {
        console.log(response);
        this.comments=response;
      }
    );
  }
  else
  {
    this.service.getCommentsByUserId(this.userId).subscribe(
      response => {
        console.log(response);
        this.comments=response;
      }
    );
    }

  }

  deleteComment(commentId:any)
  {
    if(confirm('Do you really want to delete this comment?'))
    {
     this.service.deleteCommentByCommentId(commentId).subscribe(
      response => {alert('comment deleted!!');
        window.location.reload();
    }
      
    );
    }


   
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['signin']);
    
  }
}
