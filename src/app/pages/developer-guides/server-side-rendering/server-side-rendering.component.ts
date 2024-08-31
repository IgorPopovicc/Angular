import { Component } from '@angular/core';
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-server-side-rendering',
  templateUrl: './server-side-rendering.component.html',
  styleUrls: ['./server-side-rendering.component.css']
})
export class ServerSideRenderingComponent {

  constructor(private sharedService: SharedService) {}

  scrollToTop() {
    this.sharedService.scrollToTop();
  }

}
