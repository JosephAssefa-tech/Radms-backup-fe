import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkTypeModalComponent } from './landmark-type-modal.component';

describe('LandmarkTypeModalComponent', () => {
  let component: LandmarkTypeModalComponent;
  let fixture: ComponentFixture<LandmarkTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandmarkTypeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandmarkTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
