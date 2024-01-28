import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightConditionModalComponent } from './light-condition-modal.component';

describe('LightConditionModalComponent', () => {
  let component: LightConditionModalComponent;
  let fixture: ComponentFixture<LightConditionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightConditionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightConditionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
