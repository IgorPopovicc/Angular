import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent {

  pdf = '/assets/files/documentation.pdf';
  zoom: number = 1; // Početni nivo zumiranja

  ngOnInit() {
    this.adjustZoom();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.adjustZoom();
  }

  adjustZoom() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.zoom = 0.4;
    } else if (screenWidth < 1024) {
      this.zoom = 0.6;
    } else {
      this.zoom = 0.8;
    }
  }

  openInNewTab() {
    window.open(this.pdf, '_blank');
  }

}
