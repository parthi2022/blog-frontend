import { Component } from '@angular/core';
import { PostapiService } from 'src/app/service/postapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  posts:any;
  constructor(private service:PostapiService)
  {
    this.service.getAllPosts().subscribe(
      response => {
        console.log(response);
        this.posts=response;
      }
    );

  }
 



}
