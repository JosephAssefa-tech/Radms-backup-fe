import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentTypeModalComponent } from './accident-type-modal.component';

describe('AccidentTypeModalComponent', () => {
  let component: AccidentTypeModalComponent;
  let fixture: ComponentFixture<AccidentTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccidentTypeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
