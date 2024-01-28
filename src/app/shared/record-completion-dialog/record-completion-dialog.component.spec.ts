import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordCompletionDialogComponent } from './record-completion-dialog.component';

describe('RecordCompletionDialogComponent', () => {
  let component: RecordCompletionDialogComponent;
  let fixture: ComponentFixture<RecordCompletionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordCompletionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordCompletionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
