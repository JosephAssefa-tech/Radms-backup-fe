import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { LandmarkTypeService } from 'src/app/services/landmark-types/landmark-type.service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';

@Component({
  selector: 'app-landmark-type-modal',
  templateUrl: './landmark-type-modal.component.html',
  styleUrls: ['./landmark-type-modal.component.scss']
})
export class LandmarkTypeModalComponent implements OnInit{
  @Input() action: string; // Receive the action parameter
  @Input() isEditMode: boolean;
  validateForm!: FormGroup;
  selectedRowData: any;
  healths: any[] = [];
  buttonLabel: string;
  private selectedRowDataSubscription: Subscription;
  @Output() dataUpdated: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private router: Router,
    private notification:NzNotificationService,
    private sharedbuttonService: SharedButtonLabelService,
    private modalRef: NzModalRef,
    private fb: FormBuilder,
    private healthService: LandmarkTypeService
  ) { }

  ngOnInit(): void {
    this.setButtonLable();
    this.validateForm = this.fb.group({
      LandmarkName: ['', Validators.required],
      LandmarkNameAm:[''],
      LandmarkNameOr:[''],
      LandmarkNameTi:[''],
      LandmarkNameAf:[''],
      LandmarkNameSo:['']


    });

    this.selectedRowDataSubscription = this.healthService.getSelectedRegionRowData()
    .subscribe((rowData: any) => {
      this.selectedRowData = rowData;
      this.validateForm.patchValue({
        LandmarkName: rowData.LandmarkName,
        LandmarkNameAm:rowData.LandmarkNameAm,
        LandmarkNameOr:rowData.LandmarkNameOr,
        LandmarkNameTi:rowData.LandmarkNameTi,
        LandmarkNameAf:rowData.LandmarkNameAf,
        LandmarkNameSo:rowData.LandmarkNameSo,

      });
    });
  }
  setButtonLable()
{
  this.sharedbuttonService.getButtonLabel().subscribe((label: string) => {
    if (this.action === 'Edit') {

      this.buttonLabel = 'Update landmark'; // Customize the label for editing
      this.onUpdate();

    } else {

      this.buttonLabel = label; // Use the label as it is for adding
      this.submitForm();
    }
  });
}
onUpdate(): void {
  console.log("Updating form");
  if (this.validateForm.valid) {
    const updatedData = {
      ...this.selectedRowData,
      ...this.validateForm.value
    };
    this.healthService.update(updatedData).subscribe(
      response => {
        // Handle the success response
        this.dataUpdated.emit(updatedData);
      },
      error => {
        // Handle the error response
        console.error('Error updating row data:', error);
      }
    );
}
}
  submitForm(): void {
    console.log("submitting form")
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }

    if (this.validateForm.valid) {
    // Get the form values
    const formValues = this.validateForm.value;
      // Invoke the service method
      this.healthService.post(formValues).subscribe(
        response => {
          // Handle the success response
          this.sucessNotification('data');
              // Assuming the response contains the newly added region
    const newZone = response;

    // Add the newly added region to the regions array
    this.healths.push(newZone);
          this.closeModalAndNavigate();
          window.location.reload();
        },
        error => {
          // Handle the error response
          console.error('Error submitting form:', error);
        }
      );
    } else {
      // Perform your desired actions when the form is invalid
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
  sucessNotification(type:string):void{
    this.notification.success("Data Saved Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Saved",'',{nzPlacement:'topRight'})
  }
  closeModalAndNavigate(): void {
    // Close the modal here (specific implementation depends on the modal library or method you are using)

    // Navigate back to the list of table page
    this.router.navigate(['/region']);
  }


}
