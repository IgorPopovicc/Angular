import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent {

  @Input() isLink?: boolean;
  @Input() text!: string;
  @Input() link?: string;

  constructor(private sharedService: SharedService) { }

  scrollToTop() {
    this.sharedService.scrollToTop();
  }

}
