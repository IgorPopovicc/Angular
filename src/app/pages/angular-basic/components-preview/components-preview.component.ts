import { Component } from '@angular/core';

@Component({
  templateUrl: './components-preview.component.html',
  styleUrls: ['./components-preview.component.css']
})
export class ComponentsPreviewComponent {

  ELEMENT_DATA: any[] = [
    { number: '1', hookMethod: 'ngOnChanges', details: 'Kada vrednost ulaznog ili izlaznog povezivanja (binding) promeni vrednost.' },
    { number: '2', hookMethod: 'ngOnInit', details: 'Nakon prvog ngOnChanges poziva.' },
    { number: '3', hookMethod: 'ngDoCheck', details: 'Prilagođeno otkrivanje promena od strane programera.' },
    { number: '4', hookMethod: 'ngAfterContentInit', details: 'Nakon što je sadržaj komponente inicijalizovan.' },
    { number: '5', hookMethod: 'ngAfterContentChecked', details: 'Nakon svake provere sadržaja komponente.' },
    { number: '6', hookMethod: 'ngAfterViewInit', details: 'Nakon inicijalizacije pogleda komponente.' },
    { number: '7', hookMethod: 'ngAfterViewChecked', details: 'Nakon svake provere pogleda komponente.' },
    { number: '8', hookMethod: 'ngOnDestroy', details: 'Tačno pre uništavanja direktive.' }
  ];

  displayedColumns: string[] = ['hookMethod', 'details'];
  dataSource = this.ELEMENT_DATA;

}
