import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  posts:any;
  constructor(private service:PostapiService,private router:Router)
  {
    this.service.getAllPosts().subscribe(
      response => {
        console.log(response);
        this.posts=response;
      }
    );

  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['signin']);
    
  }

}
