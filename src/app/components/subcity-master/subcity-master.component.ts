import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SubCityMaster } from 'src/app/models/get/subcity';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { SubCityService } from 'src/app/services/sub-city/sub-city.service';
import { CityModalComponent } from 'src/app/shared/city-modal/city-modal.component';
import { SubcityModalComponent } from 'src/app/shared/subcity-modal/subcity-modal.component';

@Component({
  selector: 'app-subcity-master',
  templateUrl: './subcity-master.component.html',
  styleUrls: ['./subcity-master.component.scss']
})
export class SubcityMasterComponent implements OnInit {
  subCities: SubCityMaster[]=[];
  constructor(private sharedbuttonService: SharedButtonLabelService,private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private subCityService:SubCityService) { }

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.subCityService.getSubCitiesListByLanguage(language).subscribe((city: any[]) => {
        this.subCities = city;

      });});
      this.loadSubCityies();
  }
  loadSubCityies()
  {
    this.subCityService.subCities$.subscribe(citys => {
      this.subCities = citys;

    });

  }
  showModal(action: string): void {
    this.sharedbuttonService.setButtonLabel(action);
    const modalRef = this.modal.create({
      nzTitle: 'Subcity Master',
      nzContent: SubcityModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();
      }
    });


  }
  editSubCity(subcity:any) {
    this.subCityService.update(subcity);

    this.sharedbuttonService.setButtonLabel('Update');
    //this.regionService.updateSelectedRegionRowData(rowData);
    this.showModal('Update Subcity');
  }
  openDeleteConfirmation(subCityId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteSubcity(subCityId);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }
  deleteSubcity(subCityId:number)
  {
    this.subCityService.delete(subCityId,'subCityId').subscribe(
      (response) => {
        // Success logic, if needed
        // Remove the deleted region from the regions array
        const updatedCities = this.subCities.filter(subCity => subCity.subCityId !== subCityId);
        this.subCities = updatedCities;
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
