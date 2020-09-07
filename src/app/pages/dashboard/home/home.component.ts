import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  constructor(public homeService:HomeService) { }
  async ngOnInit(){
    await this.homeService.check().then(result=>{
      console.log(result);
    })
   
  }




}
