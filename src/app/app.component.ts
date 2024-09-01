import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UpdateNotificationComponent} from "./components/update-notification/update-notification.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.checkForPopup();
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
