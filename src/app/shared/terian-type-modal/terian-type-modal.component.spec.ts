import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerianTypeModalComponent } from './terian-type-modal.component';

describe('TerianTypeModalComponent', () => {
  let component: TerianTypeModalComponent;
  let fixture: ComponentFixture<TerianTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerianTypeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerianTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
