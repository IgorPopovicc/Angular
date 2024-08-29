import { Component } from '@angular/core';
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent {

  constructor(private sharedService: SharedService) {}

  scrollToTop() {
    this.sharedService.scrollToTop();
  }

}
