import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../users/users.service';
import { CategoriesService } from '../categories.service';
import DataSource from "devextreme/data/data_source";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  dataSource :any;  
  displayedColumns: string[] = [ '_id','name', 'no','edit'];
  constructor(public userService:UsersService,public categoriesService:CategoriesService) {
    this.dataSource = new DataSource({
      key: "_id",
      load: async function (loadOptions: any) {
        return await categoriesService.categoryList().then(result => {
          console.log(result);
          return {
            data: result
          };
        }).catch(err => {
          alert(err);
        })

      }
    });
  }

  async ngOnInit() { 

    await this.categoriesService.categoryList().then(result=>{
      console.log(result);
      this.dataSource=result;
    })
  }




}
