import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatingTypeModalComponent } from './seating-type-modal.component';

describe('SeatingTypeModalComponent', () => {
  let component: SeatingTypeModalComponent;
  let fixture: ComponentFixture<SeatingTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatingTypeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatingTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
