import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimMovementComponent } from './victim-movement.component';

describe('VictimMovementComponent', () => {
  let component: VictimMovementComponent;
  let fixture: ComponentFixture<VictimMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictimMovementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
