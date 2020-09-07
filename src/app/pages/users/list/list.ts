import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';
import DataSource from "devextreme/data/data_source";

@Component({
    selector: 'app-list',
    templateUrl: './list.html',
    styleUrls: ['./list.scss']
})
export class ListComponent implements OnInit {

    dataSource: DataSource;
    constructor(public userService: UsersService) {
      this.dataSource = new DataSource({
        key: "_id",
        load: async function (loadOptions: any) {
          return await userService.userList().then(result => {
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
    }   

    public onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );
      }

}
