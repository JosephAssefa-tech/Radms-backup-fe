import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoredaMasterComponent } from './woreda-master.component';

describe('WoredaMasterComponent', () => {
  let component: WoredaMasterComponent;
  let fixture: ComponentFixture<WoredaMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoredaMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoredaMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
