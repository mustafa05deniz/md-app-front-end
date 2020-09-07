import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LayoutModule } from '../layout/layout.module';
import { ProfileComponent } from './profile/profile.component';
import { NgxEditorModule } from 'ngx-editor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { UsersService } from './users/users.service';
import { MatTableModule } from '@angular/material/table';
import { PostService } from './post/post.service';
import { LoadingComponent } from '../loading/loading.component';
import { NavService } from '../layout/sidebar/menu-list-item/nav.service';
const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'categories',
                loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
            },
            {
                path: 'posts',
                loadChildren: () => import('./post/post.module').then(m => m.PostModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
            },
            {
                path: 'settings',
                loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
            },
            {
                path: 'profile',
                component: ProfileComponent,
            },
        ]
    },

];


@NgModule({
    declarations: [
        PagesComponent,
        ProfileComponent,
        LoadingComponent
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

    ],
    providers: [
        UsersService,
        PostService,
        NavService

    ]

})
export class PagesModule {
}
