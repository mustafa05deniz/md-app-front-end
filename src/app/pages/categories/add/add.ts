import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-users-add',
    templateUrl: './add.html',
    styleUrls: ['./add.scss']
})
export class AddComponent implements OnInit {
    public categoryForm: FormGroup;

    public category = [
        { "name": "cars", "id": 0 }
    ]


    constructor(public userService: UsersService, private fb: FormBuilder,public categoriesService:CategoriesService,public router:Router) {
        this.categoryForm = this.fb.group({
            name: ['', Validators.required],
            no:['',Validators.required]
        })
    }
    async ngOnInit() {

    }

    
    addPost() {
        console.log(this.categoryForm.value);
        this.categoriesService.addNewCategory(this.categoryForm.value).then(result=>{
          console.log(result);
          if(result['status']==200){
            this.categoryForm.reset();
            this.router.navigate(['/panel/categories/list'])
          }
        }).catch(err=>{
          console.log(err);
        })
    
      }

}
