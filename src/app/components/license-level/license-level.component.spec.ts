import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseLevelComponent } from './license-level.component';

describe('LicenseLevelComponent', () => {
  let component: LicenseLevelComponent;
  let fixture: ComponentFixture<LicenseLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
