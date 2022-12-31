export class Post
{
    public postId:number ;
    public postTitle:string;
    public postContent:string;
    public postImage:File;
    public categoryId:number;
    public userId:number;
 
  
  
    constructor(postId:any,postTitle:any,postContent:any,postImage:any, categoryId:any, userId:any)
    {
      this.postId=postId;
      this.postTitle=postTitle;
      this.postContent=postContent;
      this.postImage=postImage;
      this.categoryId=categoryId;
      this.userId=userId;
    }
}