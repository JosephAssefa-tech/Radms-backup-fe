import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { VehicleServiceAge } from 'src/app/models/get/vehicle-service-age';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { VechileMasterService } from 'src/app/services/vechile-masters/vechile-master.service';
import { VehicleServiceAgeService } from 'src/app/services/vehicle-service-age/vehicle-service-age.service';
import { VechileServiceAgeModalComponent } from 'src/app/shared/vechile-service-age-modal/vechile-service-age-modal.component';

@Component({
  selector: 'app-vechile-service-age',
  templateUrl: './vechile-service-age.component.html',
  styleUrls: ['./vechile-service-age.component.scss']
})
export class VechileServiceAgeComponent implements OnInit {
  vechilesServices:VehicleServiceAge[]=[];
  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private vechileRelationService:VehicleServiceAgeService) {}

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.vechileRelationService.getVechilesListByLanguage(language).subscribe((vechiles: any[]) => {
        this.vechilesServices = vechiles;

      });});

    this.loadVechileRelationsMasters();
  }
  loadVechileRelationsMasters()
  {
    this.vechileRelationService.vechiles$.subscribe(vechiles => {
      this.vechilesServices = vechiles;

    });

  }
  openDeleteConfirmation(vehicleServiceAgeId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteVechile(vehicleServiceAgeId);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }
  onEditRow(rowData: any): void {
    console.log("update the lable here")
    this.sharedbuttonService.setButtonLabel('Update');
    this.vechileRelationService.updateSelectedVechileDefectRowData(rowData);
    this.showModal('Edit');
    // Open the modal component
    // ...
  }
  deleteVechile(vehicleServiceAgeId:number)
{
  this.vechileRelationService.delete(vehicleServiceAgeId,'vehicleServiceAgeId').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedVechileDefects = this.vechilesServices.filter(vechile => vechile.vehicleServiceAgeId !== vehicleServiceAgeId);
      this.vechilesServices = updatedVechileDefects;
    },
    (error) => {
      console.error('Error deleting region:', error);
    }
  );
  this.sucessNotification('data')


}
  editRegion(vehicleRelationId: number) {
    this.vechileRelationService.update(vehicleRelationId);
  }
  sucessNotification(type:string):void{
    this.notification.success("Data Deleted Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Deleted",'',{nzPlacement:'topRight'})
  }
  showModal(action: string): void {
    this.sharedbuttonService.setButtonLabel(action);
    const modalRef = this.modal.create({
      nzTitle: 'Vechile Servoce Age ',
      nzContent: VechileServiceAgeModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<VechileServiceAgeModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadVechileRelationsMasters();

  }

}
