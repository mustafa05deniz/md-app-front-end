import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { CategoriesService } from './categories.service';
import { NgxEditorModule } from 'ngx-editor';
import { LayoutModule } from '@angular/cdk/layout';
import { CategoriesComponent } from './categories.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add';
import { EditComponent } from './edit/edit';
import { DxDataGridModule, DxTemplateModule, DxButtonModule, DxSelectBoxModule } from 'devextreme-angular';
const routes: Routes = [
    {
        path: '',
        component: CategoriesComponent,
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
        CategoriesComponent,
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
        CommonModule ,
        MatSelectModule,
        MatTableModule,
        RouterModule.forChild(routes),
        DxDataGridModule,
        DxTemplateModule, 
        DxButtonModule, 
        DxSelectBoxModule 
    ],
    providers:[    
        CategoriesService,
       
    ]

})
export class CategoriesModule {
}
