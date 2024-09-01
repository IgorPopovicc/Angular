import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularIdeComponent } from './angular-ide.component';

describe('AngularIdeComponent', () => {
  let component: AngularIdeComponent;
  let fixture: ComponentFixture<AngularIdeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularIdeComponent]
    });
    fixture = TestBed.createComponent(AngularIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
