import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AirConditionType } from 'src/app/models/get/air-condition';
import { AirconditionService } from 'src/app/services/air-condition/aircondition.service';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { AirConditionModalComponent } from 'src/app/shared/air-condition-modal/air-condition-modal.component';
import { HealthConditionModalComponent } from 'src/app/shared/health-condition-modal/health-condition-modal.component';

@Component({
  selector: 'app-air-condition',
  templateUrl: './air-condition.component.html',
  styleUrls: ['./air-condition.component.scss']
})
export class AirConditionComponent implements OnInit {
airConditions:AirConditionType[]=[];
  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private airConditionService:AirconditionService) { }

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.airConditionService.getAirConditionsListByLanguage(language).subscribe((airconditions: any[]) => {
        this.airConditions = airconditions;

      });});

    this.loadAirCondition();
  }

  showModal(action: string): void {
    this.sharedbuttonService.setButtonLabel(action);
    const modalRef = this.modal.create({
      nzTitle: 'Air Condition',
      nzContent: AirConditionModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<AirConditionModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadAirCondition();

  }
  loadAirCondition()
  {

    this.airConditionService.airConditions$.subscribe(airCondition => {
      this.airConditions = airCondition;

    });
  }
  onEditRow(rowData: any): void {
    console.log("update the lable here")
    this.sharedbuttonService.setButtonLabel('Update');
    this.airConditionService.updateSelectedAirConditionRowData(rowData);
    this.showModal('Edit');
    // Open the modal component
    // ...
  }
  deleteAirCondition(airConditionId:number)
{
  this.airConditionService.delete(airConditionId,'airConditionId').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedAirCondition = this.airConditions.filter(airCondition => airCondition.airConditionId !== airConditionId);
      this.airConditions = updatedAirCondition;
    },
    (error) => {
      console.error('Error deleting health condition:', error);
    }
  );
  this.sucessNotification('data')


}
editAirConditioinRow(rowData: any) {
  console.log("update the lable here")
  this.sharedbuttonService.setButtonLabel('Update');
  this.airConditionService.updateSelectedAirConditionRowData(rowData);
  this.showModal('Edit');
  }
  sucessNotification(type:string):void{
    this.notification.success("Data Deleted Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Deleted",'',{nzPlacement:'topRight'})
  }
  openDeleteConfirmation(healthConditionId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this health condition?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteAirCondition(healthConditionId);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }
}
