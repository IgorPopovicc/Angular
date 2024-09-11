import {Component, HostListener} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent {

  pdf = '/assets/files/documentation.pdf';
  zoom: number = 1; // Početni nivo zumiranja

  constructor(private swUpdate: SwUpdate) {
  }

  ngOnInit() {
    this.adjustZoom();

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load new version?')) {
          window.location.reload();
        }
      });
    }
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
