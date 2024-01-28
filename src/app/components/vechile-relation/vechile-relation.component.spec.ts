import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileRelationComponent } from './vechile-relation.component';

describe('VechileRelationComponent', () => {
  let component: VechileRelationComponent;
  let fixture: ComponentFixture<VechileRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechileRelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VechileRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
