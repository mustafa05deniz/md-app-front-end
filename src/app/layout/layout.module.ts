


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SidenavService } from '../services/sidenav.service';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MenuListItemComponent } from './sidebar/menu-list-item/menu-list-item.component';
import { NavService } from './sidebar/menu-list-item/nav.service';
@NgModule({
	imports: [
		CommonModule,
		NgbModule,
		RouterModule,
		MatIconModule,
		MatListModule,
	],
	providers:[
		SidenavService,
		NavService
	],
	declarations: [HeaderComponent, SidebarComponent, PageLoaderComponent,MenuListItemComponent],
	exports: [HeaderComponent, SidebarComponent, PageLoaderComponent]
})
export class LayoutModule { }
