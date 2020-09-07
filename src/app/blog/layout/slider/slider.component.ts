import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() last_post:any;
  constructor() { }

  ngOnInit(): void {
  }

}
