import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseLevelModalComponent } from './license-level-modal.component';

describe('LicenseLevelModalComponent', () => {
  let component: LicenseLevelModalComponent;
  let fixture: ComponentFixture<LicenseLevelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseLevelModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseLevelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
