import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSideRenderingComponent } from './server-side-rendering.component';

describe('ServerSideRenderingComponent', () => {
  let component: ServerSideRenderingComponent;
  let fixture: ComponentFixture<ServerSideRenderingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerSideRenderingComponent]
    });
    fixture = TestBed.createComponent(ServerSideRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});