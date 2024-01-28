import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadCarriagewayTypeComponent } from './road-carriageway-type.component';

describe('RoadCarriagewayTypeComponent', () => {
  let component: RoadCarriagewayTypeComponent;
  let fixture: ComponentFixture<RoadCarriagewayTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadCarriagewayTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadCarriagewayTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
