import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit{

  
  constructor(public SidenavService:SidenavService){
    
  }
  ngOnInit(){
    
   console.log("page component");
  }
  
  title = 'md-app';
}
