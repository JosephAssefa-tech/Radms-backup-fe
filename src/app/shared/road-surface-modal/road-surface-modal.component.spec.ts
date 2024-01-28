import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadSurfaceModalComponent } from './road-surface-modal.component';

describe('RoadSurfaceModalComponent', () => {
  let component: RoadSurfaceModalComponent;
  let fixture: ComponentFixture<RoadSurfaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadSurfaceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadSurfaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
