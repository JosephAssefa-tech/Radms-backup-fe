import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirConditionModalComponent } from './air-condition-modal.component';

describe('AirConditionModalComponent', () => {
  let component: AirConditionModalComponent;
  let fixture: ComponentFixture<AirConditionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirConditionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirConditionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
