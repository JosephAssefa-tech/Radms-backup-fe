import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileMasterModalComponent } from './vechile-master-modal.component';

describe('VechileMasterModalComponent', () => {
  let component: VechileMasterModalComponent;
  let fixture: ComponentFixture<VechileMasterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechileMasterModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VechileMasterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
