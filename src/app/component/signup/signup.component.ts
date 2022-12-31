import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private service:PostapiService, private router:Router)
  {

  }

  user:any;
  saveUser(userId:any, userName:any, dob:any, email:any, password:any, repassword:any, about:any)
  {
    if(password==repassword)
    {
      this.user=new User(userId,userName,password,email,dob,about,"USER");
      console.log(this.user)
      this.service.signup(this.user).subscribe(

      response => {
        console.log(response);
        alert('Signup successful!!');
        this.router.navigate(['/signin']);
    }


   );
   
  }
  else
  {
    alert('password does not match!!');
    window.location.reload();
  }
  }
}
