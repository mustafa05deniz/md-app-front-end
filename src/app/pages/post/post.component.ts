import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users/users.service';
import { PostService } from './post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


 
  constructor(private fb: FormBuilder,public userService:UsersService,public postService:PostService) {

  }

  async ngOnInit() {
  
  }

}
