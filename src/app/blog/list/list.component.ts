import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { Posts } from '../posts';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data:any;
  show_post: boolean = false;
  show_slider: boolean;
  public posts: Posts[];
  last_post: Posts;
  category: string;
  constructor(public blogService: BlogService,public router:Router,public route:ActivatedRoute) { }

  async ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    console.log(this.category);
    await this.blogService.postListWithFilter(this.category).subscribe(data => {
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
        }, 100);
      }

    })
  }

}
