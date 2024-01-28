import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileRelationModalComponent } from './vechile-relation-modal.component';

describe('VechileRelationModalComponent', () => {
  let component: VechileRelationModalComponent;
  let fixture: ComponentFixture<VechileRelationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechileRelationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VechileRelationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
