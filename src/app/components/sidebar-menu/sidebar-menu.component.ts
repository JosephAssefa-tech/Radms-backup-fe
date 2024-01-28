import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  selectedMenuItem: string = 'home';
  constructor() { }

  ngOnInit(): void {
  }
  selectMenuItem(menuItem: string): void {
    this.selectedMenuItem = menuItem;
  }

}
