import { Component } from '@angular/core';
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {

  constructor(private sharedService: SharedService) {}

  scrollToTop() {
    this.sharedService.scrollToTop();
  }

}
