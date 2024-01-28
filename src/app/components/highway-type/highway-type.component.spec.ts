import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighwayTypeComponent } from './highway-type.component';

describe('HighwayTypeComponent', () => {
  let component: HighwayTypeComponent;
  let fixture: ComponentFixture<HighwayTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighwayTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighwayTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
