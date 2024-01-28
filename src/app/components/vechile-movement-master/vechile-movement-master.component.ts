import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { VehicleMovementMaster } from 'src/app/models/get/vehicle-movement-master';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { VechileDefectsService } from 'src/app/services/vechil-defect/vechile-defects.service';
import { VechileMovementService } from 'src/app/services/vechile-movements/vechile-movement.service';
import { VechileMovementModalComponent } from 'src/app/shared/vechile-movement-modal/vechile-movement-modal.component';

@Component({
  selector: 'app-vechile-movement-master',
  templateUrl: './vechile-movement-master.component.html',
  styleUrls: ['./vechile-movement-master.component.scss']
})
export class VechileMovementMasterComponent implements OnInit {
  vechilesMovements:VehicleMovementMaster[]=[];
  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private vechileMovementService:VechileMovementService) {}

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.vechileMovementService.getVechilesListByLanguage(language).subscribe((vechiles: any[]) => {
        this.vechilesMovements = vechiles;

      });});

    this.loadVechileDefectMasters();
  }
  loadVechileDefectMasters()
  {
    this.vechileMovementService.vechiles$.subscribe(vechiles => {
      this.vechilesMovements = vechiles;

    });

  }
  openDeleteConfirmation(vehicleId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteVechile(vehicleId);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }
  onEditRow(rowData: any): void {
    console.log("update the lable here")
    this.sharedbuttonService.setButtonLabel('Update');
    this.vechileMovementService.updateSelectedVechileDefectRowData(rowData);
    this.showModal('Edit');
    // Open the modal component
    // ...
  }
  deleteVechile(vehicleMovementId:number)
{
  this.vechileMovementService.delete(vehicleMovementId,'vehicleMovementId').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedVechileDefects = this.vechilesMovements.filter(vechile => vechile.vehicleMovementId !== vehicleMovementId);
      this.vechilesMovements = updatedVechileDefects;
    },
    (error) => {
      console.error('Error deleting region:', error);
    }
  );
  this.sucessNotification('data')


}
  editRegion(vehicleMovementId: number) {
    this.vechileMovementService.update(vehicleMovementId);
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
      nzTitle: 'Vechile Movement Master',
      nzContent: VechileMovementModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<VechileMovementModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadVechileDefectMasters();

  }

}
