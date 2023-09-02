import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  icons = {
    faGithub: faGithub,
    faLinkedin: faLinkedin,
    faInstagram: faInstagram,
    faBars: faBars
  }

  showFiller = false;

  constructor() { }

  ngOnInit() {

  }

}
