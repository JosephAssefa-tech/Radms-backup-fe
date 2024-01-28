import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimTypeModalComponent } from './victim-type-modal.component';

describe('VictimTypeModalComponent', () => {
  let component: VictimTypeModalComponent;
  let fixture: ComponentFixture<VictimTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictimTypeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
