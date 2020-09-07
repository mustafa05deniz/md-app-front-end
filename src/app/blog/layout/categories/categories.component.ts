import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() categories:any;
  constructor() { }

  ngOnInit(): void {
  }

}
