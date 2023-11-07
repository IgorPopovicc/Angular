import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionPreviewComponent } from './dependency-injection-preview.component';

describe('DependencyInjectionPreviewComponent', () => {
  let component: DependencyInjectionPreviewComponent;
  let fixture: ComponentFixture<DependencyInjectionPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependencyInjectionPreviewComponent]
    });
    fixture = TestBed.createComponent(DependencyInjectionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
