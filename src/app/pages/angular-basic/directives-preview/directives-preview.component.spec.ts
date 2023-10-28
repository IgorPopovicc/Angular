import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPreviewComponent } from './directives-preview.component';

describe('DirectivesPreviewComponent', () => {
  let component: DirectivesPreviewComponent;
  let fixture: ComponentFixture<DirectivesPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesPreviewComponent]
    });
    fixture = TestBed.createComponent(DirectivesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
