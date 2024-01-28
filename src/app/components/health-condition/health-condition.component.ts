import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HealthCondition } from 'src/app/models/get/health-condition';
import { HealthConditiionService } from 'src/app/services/health-condition/health-conditiion.service';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { HealthConditionModalComponent } from 'src/app/shared/health-condition-modal/health-condition-modal.component';
import { SharedModalComponent } from 'src/app/shared/shared-modal/shared-modal.component';

@Component({
  selector: 'app-health-condition',
  templateUrl: './health-condition.component.html',
  styleUrls: ['./health-condition.component.scss']
})
export class HealthConditionComponent implements OnInit {
  healths: HealthCondition[]=[];

  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private healthConditionService:HealthConditiionService) { }

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.healthConditionService.getHealthsListByLanguage(language).subscribe((healths: any[]) => {
        this.healths = healths;

      });});

    this.loadHealthCondition();
  }
  showModal(action: string): void {
    this.sharedbuttonService.setButtonLabel(action);
    const modalRef = this.modal.create({
      nzTitle: 'Health Condition',
      nzContent: HealthConditionModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<HealthConditionModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadHealthCondition();

  }
  loadHealthCondition()
  {

    this.healthConditionService.healths$.subscribe(healths => {
      this.healths = healths;

    });
  }
  onEditRow(rowData: any): void {
    console.log("update the lable here")
    this.sharedbuttonService.setButtonLabel('Update');
    this.healthConditionService.updateSelectedHealthConditionRowData(rowData);
    this.showModal('Edit');
    // Open the modal component
    // ...
  }
  deleteHealthCondition(healthConditionId:number)
{
  this.healthConditionService.delete(healthConditionId,'healthConditionId').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedHealthCondition = this.healths.filter(helath => helath.healthConditionId !== healthConditionId);
      this.healths = updatedHealthCondition;
    },
    (error) => {
      console.error('Error deleting health condition:', error);
    }
  );
  this.sucessNotification('data')


}
editHealthConditioinRow(rowData: any) {
  console.log("update the lable here")
  this.sharedbuttonService.setButtonLabel('Update');
  this.healthConditionService.updateSelectedHealthConditionRowData(rowData);
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
        this.deleteHealthCondition(healthConditionId);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }


}
