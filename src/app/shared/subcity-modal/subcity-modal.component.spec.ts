import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcityModalComponent } from './subcity-modal.component';

describe('SubcityModalComponent', () => {
  let component: SubcityModalComponent;
  let fixture: ComponentFixture<SubcityModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcityModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
