import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileServiceAgeModalComponent } from './vechile-service-age-modal.component';

describe('VechileServiceAgeModalComponent', () => {
  let component: VechileServiceAgeModalComponent;
  let fixture: ComponentFixture<VechileServiceAgeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechileServiceAgeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VechileServiceAgeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
