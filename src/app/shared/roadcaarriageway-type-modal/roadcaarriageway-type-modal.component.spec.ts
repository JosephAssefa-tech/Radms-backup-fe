import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadcaarriagewayTypeModalComponent } from './roadcaarriageway-type-modal.component';

describe('RoadcaarriagewayTypeModalComponent', () => {
  let component: RoadcaarriagewayTypeModalComponent;
  let fixture: ComponentFixture<RoadcaarriagewayTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadcaarriagewayTypeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadcaarriagewayTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
