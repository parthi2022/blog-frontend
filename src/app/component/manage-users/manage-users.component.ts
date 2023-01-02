import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  users:any;

  loginStatus:any=localStorage.getItem("loginStatus");
  userRole:any=localStorage.getItem("userRole");
  constructor(private service:PostapiService,private router:Router)
  {
    this.service.getAllUsers().subscribe(
      response => {
        console.log(response);
        this.users=response;
      }
    );

  }

  deleteUser(userId:any)
  {
    alert(userId);
    this.service.deleteUserById(userId).subscribe(
      response => { alert(response.message);
      window.location.reload();
      }
    );
  }


  logout()
  {
    localStorage.clear();
    this.router.navigate(['signin']);
    
  }
}
