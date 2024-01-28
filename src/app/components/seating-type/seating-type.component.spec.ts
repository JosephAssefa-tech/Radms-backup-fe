import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatingTypeComponent } from './seating-type.component';

describe('SeatingTypeComponent', () => {
  let component: SeatingTypeComponent;
  let fixture: ComponentFixture<SeatingTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatingTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
