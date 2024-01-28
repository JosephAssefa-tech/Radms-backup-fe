import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLicenseCategoryModalComponent } from './driver-license-category-modal.component';

describe('DriverLicenseCategoryModalComponent', () => {
  let component: DriverLicenseCategoryModalComponent;
  let fixture: ComponentFixture<DriverLicenseCategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverLicenseCategoryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverLicenseCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
