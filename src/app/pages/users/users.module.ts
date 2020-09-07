import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgxEditorModule } from 'ngx-editor';
import { ListComponent } from './list/list'
import { LayoutModule } from '@angular/cdk/layout';
import { UsersService } from './users.service';
import { UsersComponent } from './users.component';
import { AddComponent } from './add/add';
import { EditComponent } from './edit/edit';
import { DxDataGridModule, DxTemplateModule, DxButtonModule, DxSelectBoxModule } from 'devextreme-angular';
const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'add',
        component: AddComponent
    },
    {
        path: 'edit',
        component: EditComponent
    }

];


@NgModule({
    declarations: [
        UsersComponent,
        ListComponent,
        AddComponent,
        EditComponent
    ],
    imports: [
        LayoutModule,
        NgxEditorModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        CommonModule,
        MatSelectModule,
        CKEditorModule,
        MatTableModule,
        RouterModule.forChild(routes),
        DxDataGridModule,
        DxTemplateModule, 
        DxButtonModule, 
        DxSelectBoxModule 

    ],
    providers: [
        UsersService,

    ]

})
export class UsersModule {
}
