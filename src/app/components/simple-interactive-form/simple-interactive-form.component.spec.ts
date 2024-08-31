import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInteractiveFormComponent } from './simple-interactive-form.component';

describe('SimpleInteractiveFormComponent', () => {
  let component: SimpleInteractiveFormComponent;
  let fixture: ComponentFixture<SimpleInteractiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleInteractiveFormComponent]
    });
    fixture = TestBed.createComponent(SimpleInteractiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
