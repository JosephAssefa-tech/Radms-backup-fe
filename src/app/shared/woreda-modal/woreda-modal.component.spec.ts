import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoredaModalComponent } from './woreda-modal.component';

describe('WoredaModalComponent', () => {
  let component: WoredaModalComponent;
  let fixture: ComponentFixture<WoredaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoredaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoredaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
