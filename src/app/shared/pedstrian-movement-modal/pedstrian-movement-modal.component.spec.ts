import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedstrianMovementModalComponent } from './pedstrian-movement-modal.component';

describe('PedstrianMovementModalComponent', () => {
  let component: PedstrianMovementModalComponent;
  let fixture: ComponentFixture<PedstrianMovementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedstrianMovementModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedstrianMovementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
