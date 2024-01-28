import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimTypeComponent } from './victim-type.component';

describe('VictimTypeComponent', () => {
  let component: VictimTypeComponent;
  let fixture: ComponentFixture<VictimTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictimTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
