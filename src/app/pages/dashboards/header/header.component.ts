import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSidebarOpen = false;

  constructor(private authService: AuthService, private router: Router) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;

    // Apply the 'toggle-sidebar' class to the body based on the 'isSidebarOpen' value
    if (this.isSidebarOpen) {
      document.body.classList.remove('toggle-sidebar');
    } else {
      document.body.classList.add('toggle-sidebar');
    }
  }

  logout() {
    this.authService.logout('admin', (callback: boolean) => {
      if (callback) {
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
