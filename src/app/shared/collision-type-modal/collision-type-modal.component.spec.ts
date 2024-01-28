import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollisionTypeModalComponent } from './collision-type-modal.component';

describe('CollisionTypeModalComponent', () => {
  let component: CollisionTypeModalComponent;
  let fixture: ComponentFixture<CollisionTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollisionTypeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollisionTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
