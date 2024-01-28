import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileDefectComponent } from './vechile-defect.component';

describe('VechileDefectComponent', () => {
  let component: VechileDefectComponent;
  let fixture: ComponentFixture<VechileDefectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechileDefectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VechileDefectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
