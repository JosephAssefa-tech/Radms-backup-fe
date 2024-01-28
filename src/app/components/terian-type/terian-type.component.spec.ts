import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerianTypeComponent } from './terian-type.component';

describe('TerianTypeComponent', () => {
  let component: TerianTypeComponent;
  let fixture: ComponentFixture<TerianTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerianTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerianTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
