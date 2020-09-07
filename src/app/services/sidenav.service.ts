import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public hide:any;
  public show:any;
  public sideNav:Boolean;

  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);

  
  constructor(private router: Router) {
    this.router.events.subscribe(event=> {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  toogle(){
    console.log("geldi")
    this.sideNav = !this.sideNav
  }

  public closeNav() {
    console.log("close acildi")
  }

  public openNav() {
    console.log("acildi")
  }

}
