import { Component, OnInit, Input } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { Router } from '@angular/router';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  
  navItems = [
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: 'panel/dashboard',
      children: [
      ]
    },
    {
      displayName: 'Profile',
      iconName: 'person',
      route: 'panel/profile',
      children: [
      ]
    },
    {
      displayName: 'Users',
      iconName: 'group',
      route: 'panel/users',
      children: [
        {
          displayName: 'List',
          iconName: 'list',
          route: 'panel/users/list',
          children: [
          ]
        },
        {
          displayName: 'Add',
          iconName: 'add',
          route: 'panel/users/add',
          children: [
          ]
        }
      ]
    },
    {
      displayName: 'Posts',
      iconName: 'view_stream',
      route: 'panel/posts',
      children: [
        {
          displayName: 'List',
          iconName: 'list',
          route: 'panel/posts/list',
          children: [
          
          ]
        },
        {
          displayName: 'Add',
          iconName: 'post_add',
          route: 'panel/posts/add',
          children: [
          ]
        },
      ]
    },
    {
      displayName: 'Categories',
      iconName: 'category',
      route: 'panel/categories',
      children: [
        {
          displayName: 'List',
          iconName: 'list',
          route: 'panel/categories/list',
          children: [
          ]
        },
        {
          displayName: 'ADD',
          iconName: 'add',
          route: 'panel/categories/add',
          children: [
          ]
        }
      ]
    },
    {
      displayName: 'Settings',
      iconName: 'widgets',
      route: 'panel/settings',
      children: [
        {
          displayName: 'Theme Settings',
          iconName: 'star_rate',
          route: 'panel/settings/theme'
        },
      ]
    },
  ];

  constructor(public navService:SidenavService,public router: Router) { }

  ngOnInit(): void {
  }


}
