import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkTypeComponent } from './landmark-type.component';

describe('LandmarkTypeComponent', () => {
  let component: LandmarkTypeComponent;
  let fixture: ComponentFixture<LandmarkTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandmarkTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandmarkTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
