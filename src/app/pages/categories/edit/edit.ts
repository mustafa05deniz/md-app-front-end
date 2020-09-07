import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
    categoryForm: FormGroup;


    constructor(public CategoriesService:CategoriesService, private fb: FormBuilder,public router:Router, public activatedRoute: ActivatedRoute) {
        this.categoryForm = this.fb.group({
            name: ['', Validators.required],
            no:['',Validators.required]
        })
    }
    async ngOnInit() {
  

        this.state = this.router.events.pipe(
            filter(e => e instanceof NavigationStart),
            map(() => this.router.getCurrentNavigation().extras.state)
        )
        console.log(history.state)
        if(history.state.data){
            this.categoryForm.patchValue({
                name: history.state.data.name,
                no:history.state.data.no,
            })
        }else{
            this.router.navigate(['/panel/categories/list'])
        }
        
    }

    updateCategory() {
        console.log(this.categoryForm.value);
        const data= {
            "_id":history.state.data._id,
            "data":this.categoryForm.value
        }
        console.log(data);
        this.CategoriesService.updateCategory(data).then(result=>{
            this.router.navigate(['/panel/categories/list'])
        }).catch(err=>{
            console.log(err);
        })
    }

}
