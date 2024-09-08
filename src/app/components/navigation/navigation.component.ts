import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { SharedService } from 'src/app/services/shared.service';

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

  dropdownIcon = {
    open: faChevronRight,
    close: faChevronDown
  }

  isOpen: { [key: string]: any } = {
    uvod: {
      icon: this.dropdownIcon.open,
      isOpened: false
    },
    upoznavanje: {
      icon: this.dropdownIcon.open,
      isOpened: false
    },
    vodicZaProgramere: {
      icon: this.dropdownIcon.open,
      isOpened: false
    },
    najboljaPraksa: {
      icon: this.dropdownIcon.open,
      isOpened: false
    }
  };

  showFiller = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {

  }

  toggleDropdown(identifier: string): void {
    if ((this.isOpen[identifier].isOpen === undefined)) {
      this.isOpen[identifier].isOpen = true;
      this.isOpen[identifier].icon = this.dropdownIcon.close;
    } else if (this.isOpen[identifier].isOpen === false) {
      this.isOpen[identifier].isOpen = true;
      this.isOpen[identifier].icon = this.dropdownIcon.close;
    } else {
      this.isOpen[identifier].isOpen = false;
      this.isOpen[identifier].icon = this.dropdownIcon.open;
    }
  }

  scrollToTop() {
    this.sharedService.scrollToTop();
  }

}
