import { Component } from '@angular/core';
// import { localStorageService } from 'src/app/core/services/localStorage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menuItems: any[] = [];
  // constructor(public localStorageService: localStorageService) {}

  // ngOnInit(): void {
  //   this.menuItems = this.localStorageService.getMenuListItems();
  //   console.log('menuItems---1', this.menuItems);
  // }
}
