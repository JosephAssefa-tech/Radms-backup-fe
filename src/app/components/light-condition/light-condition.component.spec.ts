import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightConditionComponent } from './light-condition.component';

describe('LightConditionComponent', () => {
  let component: LightConditionComponent;
  let fixture: ComponentFixture<LightConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
