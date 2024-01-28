import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedModalComponent } from './speed-modal.component';

describe('SpeedModalComponent', () => {
  let component: SpeedModalComponent;
  let fixture: ComponentFixture<SpeedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
