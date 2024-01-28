import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthConditionModalComponent } from './health-condition-modal.component';

describe('HealthConditionModalComponent', () => {
  let component: HealthConditionModalComponent;
  let fixture: ComponentFixture<HealthConditionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthConditionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthConditionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
