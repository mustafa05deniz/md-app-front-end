import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loaderService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'md-app';
  constructor(public loader_service:LoaderService){
    this.loader_service.show();
  }
  public loading = true;
  ngOnInit(){
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
