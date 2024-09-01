import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      consent: [false, Validators.requiredTrue]
    });
  }

  public sendEmail(e: Event): void {
    e.preventDefault();

    emailjs.sendForm('service_xy6wx6h', 'template_0it9ycn', e.target as HTMLFormElement, 'Ja3yKh_sHnsOp4yix')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        if (result.text === 'OK') {
          this._snackBar.open('Poruka uspesno poslata!', 'Zatvori', {
            duration: 3000
          });
        }
      }, (error) => {
        this._snackBar.open('Doslo je do greske prilikom slanja poruke!', 'Zatvori', {
          duration: 3000
        });
      });
  }

  onSubmit(e: Event): void {
    if (this.contactForm.valid) {
      this.sendEmail(e);
      this.contactForm.reset();
    }
  }
}
