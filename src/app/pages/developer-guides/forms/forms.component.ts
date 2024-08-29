import { Component } from '@angular/core';
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  ELEMENT_DATA: any[] = [
    { form: 'Reaktivne forme', detail: 'Pružaju direktan, eksplicitan pristup osnovnom objekt modelu forme. ' +
        'U poređenju sa formama zasnovanim na šablonu, one su robusnije: skalabilnije su, ponovljivo se mogu koristiti ' +
        'i lakše se testiraju. Ako su forme ključni deo vaše aplikacije, ili već koristite reaktivne obrasce za izgradnju ' +
        'vaše aplikacije, koristite reaktivne forme.' },
    { form: 'Forme zasnovane na šablonu', detail: 'Oslanjaju se na direktive u šablonu za kreiranje i manipulaciju ' +
        'osnovnim objekt modelom. Korisne su za dodavanje jednostavne forme u aplikaciju, kao što je forma za prijavu ' +
        'na listu e-pošte. Lako se dodaju u aplikaciju, ali nisu tako skalabilne kao reaktivne forme. Ako imate vrlo ' +
        'osnovne zahteve za forme i logiku koja se može upravljati isključivo u šablonu, forme zasnovane na ' +
        'šablonu mogu biti dobar izbor.' }
  ];

  displayedColumns: string[] = ['form', 'detail'];
  dataSource = this.ELEMENT_DATA;

  constructor(private sharedService: SharedService) {}

  scrollToTop() {
    this.sharedService.scrollToTop();
  }

}
