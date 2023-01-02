import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  post:any;
  title=this.route.snapshot.queryParamMap.get('postTitle');
  constructor(private service:PostapiService,private router:Router,private route: ActivatedRoute)
  {
    
   
 
  this.service.getPostByTitle(this.title).subscribe(
    response => {
      console.log(response);
      this.post=response;
      
    }
  );

  }

}
