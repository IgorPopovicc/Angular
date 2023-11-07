import { Component } from '@angular/core';

@Component({
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {

  ELEMENT_DATA: any[] = [
    { securityContext: 'HTML', details: 'Koristi se prilikom tumačenja vrednosti kao HTML, na primer, prilikom vezivanja za innerHtml.' },
    { securityContext: 'Style', details: 'Koristi se prilikom vezivanja CSS-a u style svojstvo.'},
    { securityContext: 'URL', details: 'Koristi se za URL svojstva, kao što je <a href>.' },
    { securityContext: 'Resource URL', details: 'URL koji se učitava i izvršava kao kod, na primer, u <script src>.' }
  ];

  displayedColumns: string[] = ['security-context', 'details'];
  dataSource = this.ELEMENT_DATA;

  constructor() {}

}
