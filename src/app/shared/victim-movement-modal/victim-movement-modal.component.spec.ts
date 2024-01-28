import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimMovementModalComponent } from './victim-movement-modal.component';

describe('VictimMovementModalComponent', () => {
  let component: VictimMovementModalComponent;
  let fixture: ComponentFixture<VictimMovementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictimMovementModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimMovementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
