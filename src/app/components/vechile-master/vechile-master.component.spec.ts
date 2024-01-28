import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileMasterComponent } from './vechile-master.component';

describe('VechileMasterComponent', () => {
  let component: VechileMasterComponent;
  let fixture: ComponentFixture<VechileMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechileMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VechileMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
