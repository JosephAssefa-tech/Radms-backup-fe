import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PavementTypeModalComponent } from './pavement-type-modal.component';

describe('PavementTypeModalComponent', () => {
  let component: PavementTypeModalComponent;
  let fixture: ComponentFixture<PavementTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PavementTypeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PavementTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
