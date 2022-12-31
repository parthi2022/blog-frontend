export class User
{
  public userId:number ;
  public userName:string;
  public userPassword:string;
  public email:string;
  public dob:Date;
  public about:string;
  public role:string;


  constructor(userId:any,userName:any,userPassword:any,email:any, dob:any, about:any, role:any)
  {
    this.userId=userId;
    this.userName=userName;
    this.email=email;
    this.userPassword=userPassword;
    this.dob=dob;
    this.about=about;
    this.role=role;
  }
}