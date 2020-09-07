import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public signUpForm: FormGroup;
  constructor(private fb: FormBuilder) {
      this.signUpForm = this.fb.group({
        email:['mustafa05deniz@gmail.com',[Validators.email,Validators.required]],
        password:['123456789',Validators.required],
        rePassword:['123456789',Validators.required]

      })
  }

  ngOnInit(): void {
  }

  signUp(){
    console.log(this.signUpForm.value);
  }

}
