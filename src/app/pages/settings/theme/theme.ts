import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-settings-theme',
  templateUrl: './theme.html',
  styleUrls: ['./theme.scss']
})
export class ThemeComponent implements OnInit {

  primaryColor: string;
  secondaryColor: string;

  public color: any;
  constructor() {

  }

  public selectedColor: string = 'color1';
  public arrayColors: any = {
    sidebar_bg_color: '#2883e9',
    sidebar_hover_color: '#5f7085',
    sidebar_color: '#ffffff',
    sidebar_active_li_bg_color: '#5f2363',
    header_bg_color: '#5f2363',
    header_nav_a_color: '#5f2363',
  };

  async ngOnInit() {

  }


  changeSideBarBackground(color) {


  }

  onChangeColor(color) {
    console.log(this.selectedColor, color);
    switch (this.selectedColor) {
      case "sidebar_bg_color":
        document.documentElement.style.setProperty('--sidebar-bg-color', color);
        break;
      case "sidebar_hover_color":
        document.documentElement.style.setProperty('--sidebar-hover-color', color);
        break;
      case "sidebar_color":
        document.documentElement.style.setProperty('--sidebar-color', color);
        break;
      case "header_bg_color":
        document.documentElement.style.setProperty('--header-bg-color', color);
        break;
      case "sidebar_active_li_bg_color":
        document.documentElement.style.setProperty('--sidebar-active-li-bg-color', color);
        break;
      case "header_nav_a_color":
        document.documentElement.style.setProperty('--header-nav-a-color', color);
        break;
    }
  }


}
