import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighwayTypeModalComponent } from './highway-type-modal.component';

describe('HighwayTypeModalComponent', () => {
  let component: HighwayTypeModalComponent;
  let fixture: ComponentFixture<HighwayTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighwayTypeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighwayTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
