import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent {

  pdf = '/assets/files/Igor_Popovic_CV.pdf';
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
      this.zoom = 0.6; // Smanjivanje zumiranja na manjim ekranima
    } else if (screenWidth < 1024) {
      this.zoom = 0.8; // Srednje zumiranje za tablet uređaje
    } else {
      this.zoom = 1; // Normalno zumiranje na desktop računarima
    }
  }

  openInNewTab() {
    window.open(this.pdf, '_blank');
  }

}
