import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UpdateNotificationComponent} from "./components/update-notification/update-notification.component";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Učenje';
  isLoading = false;
  loadingRoutes = ['/angular-integrated-development-environment', '/documentation'];

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.checkForPopup();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.loadingRoutes.includes(event.url)) {
          this.isLoading = true;
          document.body.classList.add('loading-active');

          setTimeout(() => {
            this.isLoading = false;
            document.body.classList.remove('loading-active');
          }, 3000);
        }
      }

      if (event instanceof NavigationEnd) {
        if (!this.loadingRoutes.includes(event.url)) {
          this.isLoading = false;
          document.body.classList.remove('loading-active');
        }
      }
    });
  }

  checkForPopup(): void {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      this.openPopup();
      localStorage.setItem('hasSeenPopup', 'true');
    }
  }

  openPopup(): void {
    this.dialog.open(UpdateNotificationComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container'
    });
  }


}
