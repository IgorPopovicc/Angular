import { Component } from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-angular-ide',
  templateUrl: './angular-ide.component.html',
  styleUrls: ['./angular-ide.component.css']
})
export class AngularIdeComponent {

  constructor(private sharedService: SharedService) {}

  scrollToTop() {
    this.sharedService.scrollToTop();
  }

}
