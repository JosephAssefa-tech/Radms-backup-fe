import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileOwnerModalComponent } from './vechile-owner-modal.component';

describe('VechileOwnerModalComponent', () => {
  let component: VechileOwnerModalComponent;
  let fixture: ComponentFixture<VechileOwnerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechileOwnerModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VechileOwnerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
