import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { VehicleDefect } from 'src/app/models/get/vehicle-defect';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { VechileDefectsService } from 'src/app/services/vechil-defect/vechile-defects.service';
import { VechileDefectModalComponent } from 'src/app/shared/vechile-defect-modal/vechile-defect-modal.component';

@Component({
  selector: 'app-vechile-defect',
  templateUrl: './vechile-defect.component.html',
  styleUrls: ['./vechile-defect.component.scss']
})
export class VechileDefectComponent implements OnInit {
  vechileDefects: VehicleDefect[]=[];

  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private vechicleDefectService:VechileDefectsService) {}

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.vechicleDefectService.getVechilesListByLanguage(language).subscribe((vechiles: any[]) => {
        this.vechileDefects = vechiles;
        console.log(this.vechileDefects);
      });});

    this.loadVechileDefectMasters();
    
  }
  loadVechileDefectMasters(){
    this.vechicleDefectService.vechiles$.subscribe(vechiles => {
      this.vechileDefects = vechiles;
  
    });

  }

  openDeleteConfirmation(vehicleDefectId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteVechile(vehicleDefectId);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }
  onEditRow(rowData: any): void {
    console.log("update the lable here")
    this.sharedbuttonService.setButtonLabel('Update');
    this.vechicleDefectService.updateSelectedVechileDefectRowData(rowData);
    this.showModal('Edit');
    // Open the modal component
    // ...
  }
  deleteVechile(vehicleDefectId:number)
{
  this.vechicleDefectService.delete(vehicleDefectId,'vehicleDefectId').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedVechiles = this.vechileDefects.filter(vechile => vechile.vehicleDefectId !== vehicleDefectId);
      this.vechileDefects = updatedVechiles;
    },
    (error) => {
      console.error('Error deleting region:', error);
    }
  );
  this.sucessNotification('data')


}
  editRegion(vehicleDefectId: number) {
    this.vechicleDefectService.update(vehicleDefectId);
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
      nzTitle: 'Vechile Defect Master',
      nzContent: VechileDefectModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<VechileDefectModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadVechileDefectMasters();

  }
  

}
