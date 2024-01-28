import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileOwnershipComponent } from './vechile-ownership.component';

describe('VechileOwnershipComponent', () => {
  let component: VechileOwnershipComponent;
  let fixture: ComponentFixture<VechileOwnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechileOwnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VechileOwnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
