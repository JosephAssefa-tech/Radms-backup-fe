import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject } from 'rxjs';
import { CityMaster } from 'src/app/models/get/city';
import { CityService } from 'src/app/services/city/city.service';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { SubCityService } from 'src/app/services/sub-city/sub-city.service';

@Component({
  selector: 'app-subcity-modal',
  templateUrl: './subcity-modal.component.html',
  styleUrls: ['./subcity-modal.component.scss']
})
export class SubcityModalComponent implements OnInit {
  @Input() action: string; // Receive the action parameter
  @Input() isEditMode: boolean;
  buttonLabel: string;
  cityMasters$:BehaviorSubject<CityMaster[]> = new BehaviorSubject<CityMaster[]>([]);
  validateForm!: FormGroup;
cityId:any;
subcities:any[]=[];
  constructor(
    private sharedbuttonService: SharedButtonLabelService,
    private subCityService:SubCityService,
    private languageService:LanguageService,private router: Router, private fb: FormBuilder,private cityService:CityService,private notification:NzNotificationService) {
      this.validateForm = new FormGroup({
        cityId: new FormControl(null),
        subCityName:new FormControl(null),

      });
    }


  ngOnInit(): void {
    this.setButtonLable();
    this.languageService.selectedLanguage$.subscribe(language => {

      this.GetCityMaster(language);

    });
  }
  setButtonLable()
{
  this.sharedbuttonService.getButtonLabel().subscribe((label: string) => {
    if (this.action === 'Edit') {
      this.buttonLabel = 'Update Subcity'; // Customize the label for editing
    } else {
      this.buttonLabel = label; // Use the label as it is for adding
    }
  });
}
  GetCityMaster(language:string)
  {
    this.cityService.getAllByLanguage(language).subscribe(
      (response) => {
        this.cityMasters$.next(response);
        console.log("regionListList")
        console.log(this.cityMasters$)
        // Reset the selected option when the options change
        this.cityId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );

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
      this.subCityService.post(formValues).subscribe(
        response => {
          // Handle the success response
          this.sucessNotification('data');
              // Assuming the response contains the newly added region
    const newSubcity = response;

    // Add the newly added region to the regions array
    this.subcities.push(newSubcity);
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
