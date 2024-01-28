import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CityMaster } from 'src/app/models/get/city';
import { CityService } from 'src/app/services/city/city.service';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { CityModalComponent } from 'src/app/shared/city-modal/city-modal.component';
@Component({
  selector: 'app-city-master',
  templateUrl: './city-master.component.html',
  styleUrls: ['./city-master.component.scss']
})
export class CityMasterComponent implements OnInit {
  cities: CityMaster[]=[];
  validateForm!: FormGroup;

  constructor(private sharedbuttonService: SharedButtonLabelService,private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private cityService:CityService) {}

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.cityService.getCitiesListByLanguage(language).subscribe((city: any[]) => {
        this.cities = city;

      });});
      this.loadCityies();
  }
  loadCityies()
  {
    this.cityService.cities$.subscribe(citys => {
      this.cities = citys;

    });

  }

  submitForm(): void {
    // Do something with the form data here
  }
  showModal(action:string): void {
    this.sharedbuttonService.setButtonLabel(action);
    const modalRef = this.modal.create({
      nzTitle: 'City Master',
      nzContent: CityModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();
      }
    });
  }
  editCity(city: any) {
    this.sharedbuttonService.setButtonLabel('Update');
    this.cityService.update(city);
    this.showModal('Update City');
  }
  openDeleteConfirmation(zoneId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteZone(zoneId);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }
  deleteZone(cityId:number)
  {
    this.cityService.delete(cityId,'cityId').subscribe(
      (response) => {
        // Success logic, if needed
        // Remove the deleted region from the regions array
        const updatedRegions = this.cities.filter(city => city.cityId !== cityId);
        this.cities = updatedRegions;
      },
      (error) => {
        console.error('Error deleting region:', error);
      }
    );
    this.sucessNotification('data')


  }
  sucessNotification(type:string):void{
    this.notification.success("Data Deleted Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Deleted",'',{nzPlacement:'topRight'})
  }

}
