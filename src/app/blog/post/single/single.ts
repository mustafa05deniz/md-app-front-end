import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-single-post',
  templateUrl: './single.html',
  styleUrls: ['./single.scss']
})
export class SinglePostComponent implements OnInit {
  state: any;

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.state = this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => this.router.getCurrentNavigation().extras.state)
    )
    console.log(history.state)
  }

}
