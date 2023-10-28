import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
