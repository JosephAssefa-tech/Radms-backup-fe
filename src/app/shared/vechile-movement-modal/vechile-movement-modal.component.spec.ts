import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileMovementModalComponent } from './vechile-movement-modal.component';

describe('VechileMovementModalComponent', () => {
  let component: VechileMovementModalComponent;
  let fixture: ComponentFixture<VechileMovementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechileMovementModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VechileMovementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
