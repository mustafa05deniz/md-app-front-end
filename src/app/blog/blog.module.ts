import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { NgxEditorModule } from 'ngx-editor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { BlogService } from './blog.service';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './layout/header/header.component';
import { CategoriesComponent } from './layout/categories/categories.component';
import { SliderComponent } from './layout/slider/slider.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
const routes: Routes = [
    {
        path: '',
        component: BlogComponent,
    },
    {
        path: 'post',
        component: PostComponent,
    }
];


@NgModule({
    declarations: [
        BlogComponent,
        PostComponent,
        ListComponent,
        HeaderComponent,
        CategoriesComponent,
        SliderComponent
    ],
    imports: [
        NgxSkeletonLoaderModule,
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

    ],
    providers: [
        BlogService,

    ]

})
export class BlogModule {
}
