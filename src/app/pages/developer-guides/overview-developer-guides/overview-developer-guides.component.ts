import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-overview-developer-guides',
  templateUrl: './overview-developer-guides.component.html',
  styleUrls: ['./overview-developer-guides.component.css']
})
export class OverviewDeveloperGuidesComponent {

  constructor(private sharedService: SharedService) {}

  scrollToTop() {
    this.sharedService.scrollToTop();
  }

}
