import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PavementTypeComponent } from './pavement-type.component';

describe('PavementTypeComponent', () => {
  let component: PavementTypeComponent;
  let fixture: ComponentFixture<PavementTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PavementTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PavementTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
