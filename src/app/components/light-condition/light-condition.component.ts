import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LightCondition } from 'src/app/models/get/light-condition';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { LightConditionService } from 'src/app/services/light-conditions/light-condition.service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { HealthConditionModalComponent } from 'src/app/shared/health-condition-modal/health-condition-modal.component';
import { LightConditionModalComponent } from 'src/app/shared/light-condition-modal/light-condition-modal.component';

@Component({
  selector: 'app-light-condition',
  templateUrl: './light-condition.component.html',
  styleUrls: ['./light-condition.component.scss']
})
export class LightConditionComponent implements OnInit {
lights:LightCondition[]=[];
  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private lightConditionService:LightConditionService) { }

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.lightConditionService.getLightsListByLanguage(language).subscribe((lightCondition: any[]) => {
        this.lights = lightCondition;

      });});

    this.loadAirCondition();
  }
  showModal(action: string): void {
    this.sharedbuttonService.setButtonLabel(action);
    const modalRef = this.modal.create({
      nzTitle: 'Light Condition',
      nzContent: LightConditionModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<LightConditionModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadAirCondition();

  }
  loadAirCondition()
  {

    this.lightConditionService.lights$.subscribe(light => {
      this.lights = light;

    });
  }
  onEditRow(rowData: any): void {
    console.log("update the lable here")
    this.sharedbuttonService.setButtonLabel('Update');
    this.lightConditionService.updateSelectedLightConditionRowData(rowData);
    this.showModal('Edit');
    // Open the modal component
    // ...
  }
  deleteLightCondition(lightConditionId:number)
{
  this.lightConditionService.delete(lightConditionId,'lightConditionId').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedLightCondition = this.lights.filter(light => light.lightConditionId !== lightConditionId);
      this.lights = updatedLightCondition;
    },
    (error) => {
      console.error('Error deleting health condition:', error);
    }
  );
  this.sucessNotification('data')


}
editLightConditioinRow(rowData: any) {
  console.log("update the lable here")
  this.sharedbuttonService.setButtonLabel('Update');
  this.lightConditionService.updateSelectedLightConditionRowData(rowData);
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
        this.deleteLightCondition(healthConditionId);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }

}
