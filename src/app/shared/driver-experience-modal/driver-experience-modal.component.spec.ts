import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverExperienceModalComponent } from './driver-experience-modal.component';

describe('DriverExperienceModalComponent', () => {
  let component: DriverExperienceModalComponent;
  let fixture: ComponentFixture<DriverExperienceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverExperienceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverExperienceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
