import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrerenderingComponent } from './prerendering.component';

describe('PrerenderingComponent', () => {
  let component: PrerenderingComponent;
  let fixture: ComponentFixture<PrerenderingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrerenderingComponent]
    });
    fixture = TestBed.createComponent(PrerenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
