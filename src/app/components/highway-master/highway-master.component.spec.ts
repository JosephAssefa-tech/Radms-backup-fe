import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighwayMasterComponent } from './highway-master.component';

describe('HighwayMasterComponent', () => {
  let component: HighwayMasterComponent;
  let fixture: ComponentFixture<HighwayMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighwayMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighwayMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
