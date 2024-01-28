import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighwayMasterModalComponent } from './highway-master-modal.component';

describe('HighwayMasterModalComponent', () => {
  let component: HighwayMasterModalComponent;
  let fixture: ComponentFixture<HighwayMasterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighwayMasterModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighwayMasterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
