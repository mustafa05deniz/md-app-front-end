import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
    selector: 'app-users-add',
    templateUrl: './add.html',
    styleUrls: ['./add.scss']
})
export class AddComponent implements OnInit {

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
    public userForm: FormGroup;
    constructor(public userService: UsersService, private fb: FormBuilder) {
        this.userForm = this.fb.group({
            name: ['', Validators.required],
            linkedin: ['', Validators.required],
            role: ['', Validators.required],
            email: ['', [Validators.email, Validators.required]],
            password: ['', Validators.required],
        })
    }
    ngOnInit(): void {
       
    }

    addNewUser() {
        console.log(this.userForm.value);
        const data = {
            "name": this.userForm.value.name,
            "email": this.userForm.value.email,
            "linkedin": this.userForm.value.linkedin,
            "password": this.userForm.value.password,
            "role": this.userForm.value.role
        }
        this.userService.addNewUser(data).then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })

    }

}
