import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { NgxEditorModule } from 'ngx-editor';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { DashboardComponent } from './dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },


];


@NgModule({
    declarations: [
        DashboardComponent,
        HomeComponent,
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
        CKEditorModule,
        MatTableModule,
        RouterModule.forChild(routes),
        NgxChartsModule
        
    ],
    providers:[    
        HomeService,
       
    ]

})
export class DashboardModule {
}
