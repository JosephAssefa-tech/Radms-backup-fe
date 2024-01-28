import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject } from 'rxjs';
import { WoredaMaster } from 'src/app/models/get/woreda';
import { CityService } from 'src/app/services/city/city.service';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { WoredaMasterService } from 'src/app/services/woreda-service/woreda-master.service';
import { ZoneMasterService } from 'src/app/services/zone-service/zone-master.service';

@Component({
  selector: 'app-city-modal',
  templateUrl: './city-modal.component.html',
  styleUrls: ['./city-modal.component.scss']
})
export class CityModalComponent implements OnInit {
  @Input() action: string; // Receive the action parameter
  @Input() isEditMode: boolean;
  buttonLabel: string;
  woredaMasters$:BehaviorSubject<WoredaMaster[]> = new BehaviorSubject<WoredaMaster[]>([]);


  validateForm!: FormGroup;
  cities: any[] = [];
  woredaId:any;
  constructor(private sharedbuttonService: SharedButtonLabelService,
    private cityService:CityService,
    private languageService:LanguageService,private router: Router, private fb: FormBuilder,private woredaService:WoredaMasterService,private notification:NzNotificationService) {
      this.validateForm = new FormGroup({
        woredaId: new FormControl(null),
        cityName:new FormControl(null),
        cityNameAm:new FormControl(null),
        cityNameOr:new FormControl(null),
        cityNameSo:new FormControl(null),
        cityNameTi:new FormControl(null),


      });
     }

  ngOnInit(): void {
    this.setButtonLable();
    this.languageService.selectedLanguage$.subscribe(language => {

      this.GetWoredaMaster(language);

    });

  }
  setButtonLable()
{
  this.sharedbuttonService.getButtonLabel().subscribe((label: string) => {
    if (this.action === 'Edit') {
      this.buttonLabel = 'Update City'; // Customize the label for editing
    } else {
      this.buttonLabel = label; // Use the label as it is for adding
    }
  });
}
  GetWoredaMaster(language:string)
  {
    this.woredaService.getAllByLanguage(language).subscribe(
      (response) => {
        this.woredaMasters$.next(response);
        console.log("regionListList")
        console.log(this.woredaMasters$)
        // Reset the selected option when the options change
        this.woredaId = null;
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
      this.cityService.post(formValues).subscribe(
        response => {
          // Handle the success response
          this.sucessNotification('data');
              // Assuming the response contains the newly added region
    const newZone = response;

    // Add the newly added region to the regions array
    this.cities.push(newZone);
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
