import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsPreviewComponent } from './components-preview.component';

describe('ComponentsPreviewComponent', () => {
  let component: ComponentsPreviewComponent;
  let fixture: ComponentFixture<ComponentsPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsPreviewComponent]
    });
    fixture = TestBed.createComponent(ComponentsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
