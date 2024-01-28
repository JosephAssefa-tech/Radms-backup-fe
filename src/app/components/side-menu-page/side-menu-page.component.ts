import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu-page',
  templateUrl: './side-menu-page.component.html',
  styleUrls: ['./side-menu-page.component.scss']
})
export class SideMenuPageComponent implements OnInit {
  isCollapsed = false;
  showComponent = false;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log("side");
  }
  selectMenuItem(menuItem: string): void {
    switch(menuItem) {
      case 'home':
        this.router.navigate(['/home']);
        break;
      case 'accident':
        this.router.navigate(['/accident']);
        break;
        case 'login':
          this.router.navigate(['/login']);
          break;
      default:
        this.router.navigate(['/welcome']);
        break;
    }
  }
}
