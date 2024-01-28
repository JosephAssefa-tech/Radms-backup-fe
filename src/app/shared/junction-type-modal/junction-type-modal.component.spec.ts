import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunctionTypeModalComponent } from './junction-type-modal.component';

describe('JunctionTypeModalComponent', () => {
  let component: JunctionTypeModalComponent;
  let fixture: ComponentFixture<JunctionTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunctionTypeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JunctionTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
