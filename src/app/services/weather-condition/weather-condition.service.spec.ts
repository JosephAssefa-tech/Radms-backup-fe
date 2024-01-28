import { TestBed } from '@angular/core/testing';

import { WeatherConditionService } from './weather-condition.service';

describe('WeatherConditionService', () => {
  let service: WeatherConditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherConditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
