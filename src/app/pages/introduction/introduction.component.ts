import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {

  constructor(private sharedService: SharedService) { }

  scrollToTop() {
    this.sharedService.scrollToTop();
  }

}
