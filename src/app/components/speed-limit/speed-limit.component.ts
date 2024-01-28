import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SpeedLimit } from 'src/app/models/get/speed-limit';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { SpeedLimitService } from 'src/app/services/speed-limit/speed-limit.service';
import { SpeedModalComponent } from 'src/app/shared/speed-modal/speed-modal.component';
import { VechileRelationModalComponent } from 'src/app/shared/vechile-relation-modal/vechile-relation-modal.component';

@Component({
  selector: 'app-speed-limit',
  templateUrl: './speed-limit.component.html',
  styleUrls: ['./speed-limit.component.scss']
})
export class SpeedLimitComponent implements OnInit {
  vechilesRelations:SpeedLimit[]=[];

  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private vechileRelationService:SpeedLimitService) {}

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.vechileRelationService.getVechilesListByLanguage(language).subscribe((vechiles: any[]) => {
        this.vechilesRelations = vechiles;

      });});

    this.loadVechileRelationsMasters();
  }
  loadVechileRelationsMasters()
  {
    this.vechileRelationService.vechiles$.subscribe(vechiles => {
      this.vechilesRelations = vechiles;

    });

  }

  openDeleteConfirmation(speedLimitId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteVechile(speedLimitId);
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
  deleteVechile(speedLimitId:number)
{
  this.vechileRelationService.delete(speedLimitId,'speedLimitId').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedVechileDefects = this.vechilesRelations.filter(vechile => vechile.speedLimitId !== speedLimitId);
      this.vechilesRelations = updatedVechileDefects;
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
      nzTitle: 'Speed limit Master',
      nzContent: SpeedModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<SpeedModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadVechileRelationsMasters();

  }

}
