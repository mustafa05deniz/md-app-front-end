import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';
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
    userForm: FormGroup;

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
    constructor(public userService: UsersService, private fb: FormBuilder,public router:Router, public activatedRoute: ActivatedRoute) {
        this.userForm = this.fb.group({
            name: ['', Validators.required],
            linkedin: ['', Validators.required],
            role: ['', Validators.required],
            email: ['', [Validators.email, Validators.required]],
        })
    }
    async ngOnInit() {
  

        this.state = this.router.events.pipe(
            filter(e => e instanceof NavigationStart),
            map(() => this.router.getCurrentNavigation().extras.state)
        )
        console.log(history.state)
        if(history.state.data){
            this.userForm.patchValue({
                name: history.state.data.name,
                linkedin:history.state.data.linkedin,
                role:history.state.data.role.toString(),
                email: history.state.data.email
            })
        }else{
            this.router.navigate(['/panel/users/list'])
        }
        
    }

    updateUser() {
        console.log(this.userForm.value);
    }

}
