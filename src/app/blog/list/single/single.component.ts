import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-single-post',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit() {
  
  }

}
