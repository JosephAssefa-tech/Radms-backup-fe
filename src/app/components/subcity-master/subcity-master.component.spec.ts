import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcityMasterComponent } from './subcity-master.component';

describe('SubcityMasterComponent', () => {
  let component: SubcityMasterComponent;
  let fixture: ComponentFixture<SubcityMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcityMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcityMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
