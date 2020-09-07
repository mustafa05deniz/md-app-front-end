import { Component, OnInit } from '@angular/core';
import { Category } from './category'
import { Posts } from './posts';
import { BlogService } from './blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blog_title = "MD Blog"
  public categories: Category[];

  /*

  [
    { id: 1, name: "Software" },
    { id: 2, name: "world" },
    { id: 3, name: "TR" },
    { id: 4, name: "Technology" },
    { id: 5, name: "Desing" },
    { id: 6, name: "Culture" },
    { id: 7, name: "Science" },
    { id: 8, name: "Travel" },
    { id: 9, name: "Style" },
    { id: 10, name: "Healt" },
  ]
  */
  public posts: Posts[];

  last_post: Posts;
  show_post: boolean = false;
  show_slider: boolean;
  constructor(public blogService: BlogService) { }

  async ngOnInit() {

    await this.blogService.categoryList().subscribe(data=>{
      console.log(data);
      if(data.length==0){
        this.categories = [{name:"first categories",id:1,no:1}]
      }else{
        this.categories = data
      }
     
    })

    await this.blogService.postList().subscribe(data => {
      console.log(data);
      if (data.length == 0) {
        console.log("ss")
        this.posts = [{ title: "Default Post", text: "default text", "summary": "default summary", createdDate: new Date(), author: "mustafa05deniz", "category": "Desing", id: 1, img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg", link: 1 }]
        console.log(this.posts);
        this.last_post = this.posts[0];
        this.show_slider = true;
      } else {
        this.posts = data.reverse();
        this.last_post = this.posts[0];
        this.show_slider = true;
        setTimeout(() => {
            this.show_post=true;
        }, 2000);
      }

    })
  }



}
