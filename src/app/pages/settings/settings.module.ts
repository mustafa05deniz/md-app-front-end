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
import { SettingsComponent } from './settings.component';
import { SettingsService } from './settings.service';
import { ThemeComponent } from './theme/theme';
import { ColorPickerModule } from 'ngx-color-picker';
const routes: Routes = [
    {
        path: 'general',
        component: SettingsComponent,
    },
    {
        path: 'theme',
        component: ThemeComponent,
    },



];


@NgModule({
    declarations: [
        SettingsComponent,
        ThemeComponent
    ],
    imports: [
        ColorPickerModule,
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
        
    ],
    providers:[    
        SettingsService,
       
    ]

})
export class SettingsModule {
}
