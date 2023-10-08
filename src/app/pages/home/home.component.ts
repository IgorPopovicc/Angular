import { SharedService } from './../../services/shared.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private sharedService: SharedService) { }

  scrollToTop() {
    this.sharedService.scrollToTop();
  }

}
