import { Component } from '@angular/core';
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent {

  constructor(private sharedService: SharedService) {}

  scrollToTop() {
    this.sharedService.scrollToTop();
  }

}
