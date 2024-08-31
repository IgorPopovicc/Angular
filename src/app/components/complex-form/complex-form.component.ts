import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})
export class ComplexFormComponent {
  complexForm: FormGroup;
  totalPrice: number = 0;

  constructor(private fb: FormBuilder) {
    this.complexForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(1)]],
      productQuantity: ['', [Validators.required, Validators.min(1)]],
      productPrice: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  calculateTotalPrice() {
    const quantity = this.complexForm.get('productQuantity')?.value;
    const price = this.complexForm.get('productPrice')?.value;
    this.totalPrice = quantity * price;
  }

  onSubmit() {
    if (this.complexForm.valid) {
      this.calculateTotalPrice();
    } else {
      this.totalPrice = 0;
    }
  }
}
