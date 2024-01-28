import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLicenseCategoryComponent } from './driver-license-category.component';

describe('DriverLicenseCategoryComponent', () => {
  let component: DriverLicenseCategoryComponent;
  let fixture: ComponentFixture<DriverLicenseCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverLicenseCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverLicenseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
