import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileServiceAgeComponent } from './vechile-service-age.component';

describe('VechileServiceAgeComponent', () => {
  let component: VechileServiceAgeComponent;
  let fixture: ComponentFixture<VechileServiceAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechileServiceAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VechileServiceAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
