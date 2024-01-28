import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherConditionModalComponent } from './weather-condition-modal.component';

describe('WeatherConditionModalComponent', () => {
  let component: WeatherConditionModalComponent;
  let fixture: ComponentFixture<WeatherConditionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherConditionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherConditionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
