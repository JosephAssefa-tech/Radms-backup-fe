import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject } from 'rxjs';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { RegionsService } from 'src/app/services/region/regions.service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { WoredaMasterService } from 'src/app/services/woreda-service/woreda-master.service';
import { ZoneMasterService } from 'src/app/services/zone-service/zone-master.service';

@Component({
  selector: 'app-woreda-modal',
  templateUrl: './woreda-modal.component.html',
  styleUrls: ['./woreda-modal.component.scss']
})
export class WoredaModalComponent implements OnInit {
  @Input() action: string; // Receive the action parameter
  @Input() isEditMode: boolean;
  buttonLabel: string;
  zonesMaster$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);


  zoneId:any;

  validateForm: FormGroup;
  woredas: any[] = [];
  constructor(
    private zoneService:ZoneMasterService,
    private sharedbuttonService: SharedButtonLabelService,
    private regionService:RegionsService, private languageService:LanguageService,private router: Router, private fb: FormBuilder,private woredaService:WoredaMasterService,private notification:NzNotificationService) {
    this.validateForm = new FormGroup({
      zoneId: new FormControl(null),
      woredaName:new FormControl(null),
      woredaNameAm:new FormControl(null),
      woredaNameOr:new FormControl(null),
      woredaNameSo:new FormControl(null),
      woredaNameTi:new FormControl(null),
      woredaNameAf:new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.setButtonLable();
    this.languageService.selectedLanguage$.subscribe(language => {

      this.zoneMaster(language);
    });
  }
  setButtonLable()
{
  this.sharedbuttonService.getButtonLabel().subscribe((label: string) => {
    if (this.action === 'Edit') {
      this.buttonLabel = 'Update Woreda'; // Customize the label for editing
    } else {
      this.buttonLabel = label; // Use the label as it is for adding
    }
  });
}
  submitForm(): void {
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
      this.woredaService.post(formValues).subscribe(
        response => {
          // Handle the success response
          this.sucessNotification('data');
              // Assuming the response contains the newly added region
    const newWoreda = response;

    // Add the newly added region to the regions array
    this.woredas.push(newWoreda);
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
    this.router.navigate(['/woreda']);
  }
  zoneMaster(lanugage:string)
  {
    this.zoneService.getAllByLanguage(lanugage).subscribe(
      (response) => {
        this.zonesMaster$.next(response);
        console.log("regionListList")
        console.log(this.zonesMaster$)
        // Reset the selected option when the options change
        this.zoneId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );


  }

}
