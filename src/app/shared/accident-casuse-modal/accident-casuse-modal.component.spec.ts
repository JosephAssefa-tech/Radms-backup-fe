import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentCasuseModalComponent } from './accident-casuse-modal.component';

describe('AccidentCasuseModalComponent', () => {
  let component: AccidentCasuseModalComponent;
  let fixture: ComponentFixture<AccidentCasuseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccidentCasuseModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentCasuseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
