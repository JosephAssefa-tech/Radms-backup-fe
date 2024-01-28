import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadSurfaceConditionComponent } from './road-surface-condition.component';

describe('RoadSurfaceConditionComponent', () => {
  let component: RoadSurfaceConditionComponent;
  let fixture: ComponentFixture<RoadSurfaceConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadSurfaceConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadSurfaceConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
