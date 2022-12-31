import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  loginStatus:any=localStorage.getItem("loginStatus");
  userRole:any=localStorage.getItem("userRole");

  constructor(private router:Router)
  {
    if(this.loginStatus!="active")
    {
      this.router.navigate(['signin']);
    }
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['signin']);
    
  }
}
