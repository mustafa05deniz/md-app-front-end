import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() blog_title:String;
  constructor() { }

  ngOnInit(): void {
  }

}
