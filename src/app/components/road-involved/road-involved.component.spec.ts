import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadInvolvedComponent } from './road-involved.component';

describe('RoadInvolvedComponent', () => {
  let component: RoadInvolvedComponent;
  let fixture: ComponentFixture<RoadInvolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadInvolvedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadInvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
