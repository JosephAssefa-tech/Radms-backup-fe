import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentStatusModalComponent } from './employment-status-modal.component';

describe('EmploymentStatusModalComponent', () => {
  let component: EmploymentStatusModalComponent;
  let fixture: ComponentFixture<EmploymentStatusModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentStatusModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
