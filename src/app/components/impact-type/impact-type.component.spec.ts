import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactTypeComponent } from './impact-type.component';

describe('ImpactTypeComponent', () => {
  let component: ImpactTypeComponent;
  let fixture: ComponentFixture<ImpactTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
