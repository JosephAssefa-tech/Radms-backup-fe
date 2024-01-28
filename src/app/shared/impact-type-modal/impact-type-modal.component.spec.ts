import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactTypeModalComponent } from './impact-type-modal.component';

describe('ImpactTypeModalComponent', () => {
  let component: ImpactTypeModalComponent;
  let fixture: ComponentFixture<ImpactTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactTypeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
