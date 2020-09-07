import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-users-add',
    templateUrl: './add.html',
    styleUrls: ['./add.scss']
})
export class AddComponent implements OnInit {
    public Editor = ClassicEditor;
    public postForm: FormGroup;

    public category = [
        { "name": "cars", "id": 0 }
    ]

    public editorData = '<p>Hello, wsorld!</p>';
    public ckconfig = {
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],

    };
    userList: any;

    constructor(public userService: UsersService, private fb: FormBuilder,public postService:PostService,public router:Router) {
        this.postForm = this.fb.group({
            title: ['', Validators.required],
            text: [
                ` 
      <h2>What is Lorem Ipsum?</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      <p><a href="http://mustafadeniz.net">http://mustafadeniz.net</a></p>
      <ul><li><a href="https://www.linkedin.com/in/denizmustafa/">fallow me on linkedin&nbsp;</a></li></ul>`
                , Validators.required],
            summary:['',[Validators.required,Validators.maxLength(30)]]  ,
            category: ['', Validators.required],
            author: ['', Validators.required],
            img:['',Validators.required]
        })
    }
    async ngOnInit() {
        await this.userService.userList().then(result=>{
            this.userList=result;
          });
    }

    
    addPost() {
        this.postService.addNewPost(this.postForm.value).then(result=>{
          console.log(result);
          if(result['status']==200){
            this.postForm.reset();
            this.router.navigate(['/panel/posts/list'])
          }
        }).catch(err=>{
          console.log(err);
        })
    
      }

}
