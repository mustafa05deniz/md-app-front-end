import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic';
import { PostService } from '../post.service';
@Component({
    selector: 'app-users-edit',
    templateUrl: './edit.html',
    styleUrls: ['./edit.scss']
})
export class EditComponent implements OnInit {


    dataSource: any;
    displayedColumns: string[] = ['title', 'text', 'category', 'author', 'link'];
    public id: any;

    state: Observable<object>;
    public Editor = ClassicEditor;
    public postForm: FormGroup;
    public roles = [
        {
            "name": "super Admin",
            "type": 0
        },
        {
            "name": "editor",
            "type": 1
        },
        {
            "name": "reader",
            "type": 2
        },
        {
            "name": "nothing",
            "type": 3
        }
    ]

    public ckconfig = {
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],

    };
    public editorData = '<p>Hello, wsorld!</p>';
    categoryList: unknown;
    userList: unknown;
    constructor(public userService: UsersService, private fb: FormBuilder, public router: Router, public activatedRoute: ActivatedRoute, public postService: PostService) {
        this.postForm = this.fb.group({
            title: ['', Validators.required],
            text: [
                ` 
      <h2>What is Lorem Ipsum?</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      <p><a href="http://mustafadeniz.net">http://mustafadeniz.net</a></p>
      <ul><li><a href="https://www.linkedin.com/in/denizmustafa/">fallow me on linkedin&nbsp;</a></li></ul>`
                , Validators.required],
            summary: ['', [Validators.required, Validators.maxLength(30)]],
            category: ['', Validators.required],
            author: ['', Validators.required],
            img: ['', Validators.required]
        })
    }
    async ngOnInit() {

        await this.postService.categoryList().then(result => {
            console.log(result);
            this.categoryList = result;
        })
        await this.userService.userList().then(result => {
            this.userList = result;
        });
        this.state = this.router.events.pipe(
            filter(e => e instanceof NavigationStart),
            map(() => this.router.getCurrentNavigation().extras.state)
        )
        console.log(history.state)
        if (history.state.data) {
            this.editorData  = history.state.data.text
            this.postForm.patchValue({
                title: history.state.data.title,
                summary : history.state.data.summary,
            })
        } else {
            this.router.navigate(['/panel/posts/list'])
        }

    }

    updatePost() {
        console.log(this.postForm.value);
    }



}
