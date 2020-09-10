import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BlogService } from '../blog.service';
import { Posts } from '../posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  state: any;
  post:any;
  postID: any;
  posts: Posts[];
  show_post: boolean;
  show_single_post: boolean;
  constructor(public router:Router,public route:ActivatedRoute,public blogService:BlogService) { }

  async ngOnInit() {
    this.postID = this.route.snapshot.paramMap.get('id');

    await this.blogService.SinglePost({id:this.postID}).subscribe(result=>{
      this.post = result;
      this.show_single_post=true;
    })
    await this.blogService.postList().subscribe(data => {
      this.posts = data;
      setTimeout(() => {
        this.show_post=true;
    }, 100);
    })
  }

}
