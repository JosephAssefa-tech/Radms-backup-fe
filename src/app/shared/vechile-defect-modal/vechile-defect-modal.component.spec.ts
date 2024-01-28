import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileDefectModalComponent } from './vechile-defect-modal.component';

describe('VechileDefectModalComponent', () => {
  let component: VechileDefectModalComponent;
  let fixture: ComponentFixture<VechileDefectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechileDefectModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VechileDefectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
