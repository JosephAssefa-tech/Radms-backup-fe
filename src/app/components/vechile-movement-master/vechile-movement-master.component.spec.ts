import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileMovementMasterComponent } from './vechile-movement-master.component';

describe('VechileMovementMasterComponent', () => {
  let component: VechileMovementMasterComponent;
  let fixture: ComponentFixture<VechileMovementMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechileMovementMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VechileMovementMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
