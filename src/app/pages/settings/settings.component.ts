import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.setProperty('$sidebar-bg-color', 'red');
    document.documentElement.style.setProperty('--primary-color', 'red');
  }

}
