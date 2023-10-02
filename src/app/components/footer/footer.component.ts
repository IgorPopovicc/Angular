import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  icons = {
    faLinkedin: faLinkedin,
    faEnvelope: faEnvelope,
    faPhone: faPhone
  }

  constructor(private sharedService: SharedService) { }

  scrollToTop() {
    this.sharedService.scrollToTop();
  }

}
