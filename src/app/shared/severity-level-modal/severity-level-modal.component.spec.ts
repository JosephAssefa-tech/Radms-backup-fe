import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverityLevelModalComponent } from './severity-level-modal.component';

describe('SeverityLevelModalComponent', () => {
  let component: SeverityLevelModalComponent;
  let fixture: ComponentFixture<SeverityLevelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeverityLevelModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeverityLevelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
