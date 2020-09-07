import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userInformation: any;

  constructor(public profileService : ProfileService ) { }

  async ngOnInit(){
    await this.profileService.user_information().then(result=>{
      this.userInformation = result;
    }).catch(err=>{
      console.log(err);
    })
  }

}
