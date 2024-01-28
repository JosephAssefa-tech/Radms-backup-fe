import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-completion-dialog',
  templateUrl: './record-completion-dialog.component.html',
  styleUrls: ['./record-completion-dialog.component.scss']
})
export class RecordCompletionDialogComponent implements OnInit {
  isVisible = false;

  openModal(): void {
    this.isVisible = true;
  }

  closeModal(): void {
    this.isVisible = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
