import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedestrianMovementComponent } from './pedestrian-movement.component';

describe('PedestrianMovementComponent', () => {
  let component: PedestrianMovementComponent;
  let fixture: ComponentFixture<PedestrianMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedestrianMovementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedestrianMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
