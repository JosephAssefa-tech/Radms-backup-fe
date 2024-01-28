import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedLimitComponent } from './speed-limit.component';

describe('SpeedLimitComponent', () => {
  let component: SpeedLimitComponent;
  let fixture: ComponentFixture<SpeedLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
