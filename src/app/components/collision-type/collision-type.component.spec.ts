import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollisionTypeComponent } from './collision-type.component';

describe('CollisionTypeComponent', () => {
  let component: CollisionTypeComponent;
  let fixture: ComponentFixture<CollisionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollisionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollisionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
