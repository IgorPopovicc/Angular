import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-simple-interactive-form',
  templateUrl: './simple-interactive-form.component.html',
  styleUrls: ['./simple-interactive-form.component.css']
})
export class SimpleInteractiveFormComponent {
  simpleForm: FormGroup;
  displayedText: string = '';

  constructor(private fb: FormBuilder) {
    this.simpleForm = this.fb.group({
      userInput: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    if (this.simpleForm.valid) {
      this.displayedText = this.simpleForm.get('userInput')?.value;
    }
  }
}
