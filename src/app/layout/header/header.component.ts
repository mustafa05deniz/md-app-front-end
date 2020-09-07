import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user:any
  constructor(public SidenavService:SidenavService,public router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
